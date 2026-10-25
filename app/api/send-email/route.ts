import { Resend } from 'resend';

// 入力の上限（フォーム側の maxLength と揃える）
const LIMITS = { name: 100, email: 254, message: 5000 };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// メール本文の HTML に入力値をそのまま埋め込まないようエスケープする
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// 問い合わせが届いたことを Discord に流す（DISCORD_WEBHOOK_URL 未設定なら何もしない）。
// メールは送信済みなので、ここで失敗してもログに残すだけにする
async function notifyDiscord(name: string, email: string, message: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // 本文に @everyone などが含まれていてもメンションを飛ばさない
        allowed_mentions: { parse: [] },
        embeds: [
          {
            title: 'HPにお問い合わせが届きました',
            // embed の説明文は 4096 文字まで
            description: message.length > 4000 ? `${message.slice(0, 4000)}…` : message,
            color: 0x2563eb,
            fields: [
              { name: '名前', value: name, inline: true },
              { name: 'メール', value: email, inline: true },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
    if (!response.ok) {
      console.error('Discord への通知に失敗しました', response.status, await response.text());
    }
  } catch (error) {
    console.error('Discord への通知に失敗しました', error);
  }
}

function readField(body: Record<string, unknown>, key: keyof typeof LIMITS) {
  const value = body[key];
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > LIMITS[key]) return null;
  return trimmed;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error('RESEND_API_KEY または CONTACT_TO_EMAIL が設定されていません');
    return Response.json({ error: 'メールの送信設定がされていません' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: '不正なリクエストです' }, { status: 400 });
  }

  const name = readField(body, 'name');
  const email = readField(body, 'email');
  const message = readField(body, 'message');
  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return Response.json({ error: '入力内容を確認してください' }, { status: 400 });
  }

  // Resend は失敗時に例外ではなく { error } を返す
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    // 独自ドメインを Resend で認証したら CONTACT_FROM_EMAIL に送信元を設定する
    from: process.env.CONTACT_FROM_EMAIL ?? 'Albus. <onboarding@resend.dev>',
    to,
    replyTo: email,
    subject: `【HP問い合わせ】${name} 様より`,
    text: `名前: ${name}\nメール: ${email}\n\n${message}`,
    html: `<p>名前: ${escapeHtml(name)}</p><p>メール: ${escapeHtml(email)}</p><p>内容:<br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
  });

  if (error) {
    console.error('お問い合わせメールの送信に失敗しました', error);
    return Response.json({ error: '送信に失敗しました' }, { status: 502 });
  }

  await notifyDiscord(name, email, message);

  return Response.json({ success: true });
}
