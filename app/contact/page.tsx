'use client';

import { useState } from 'react';
// 臨時対応(yuiki.dev誘導)：フォームが直ったらこの import を削除する
import TemporaryContactNotice from '../components/TemporaryContactNotice';

// 臨時対応(yuiki.dev誘導)：メールが届かない間はフォームを隠し、yuiki.dev へ案内する。
// フォームが直ったら、この定数と下の分岐を削除する
const SHOW_TEMPORARY_CONTACT_NOTICE = true;

function FormField({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="formField">
      <label htmlFor={id} className="formLabel">{label}</label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 送信処理：/api/send-email（Resend）経由でメールを送る
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: form.get('message'),
        }),
      });
      if (!response.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('送信に失敗しました。時間をおいて再度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="site">
      <div className="pageContainer pageContainerNarrow">
        <p className="label">Contact us</p>
        <h1 className="pageTitle">お問い合わせ</h1>
        <p className="sectionText pageText contactLead">
          Albusへのご意見やご感想、コラボレーションのご提案などは以下のフォームよりお送りください。
          提供済みのサービスに関するお問い合わせや修正依頼は各サービスのお問い合わせフォームをご利用ください。
        </p>

        {/* 臨時対応(yuiki.dev誘導)：フォームが直ったら、この分岐ごと削除して下の表示だけ残す */}
        {SHOW_TEMPORARY_CONTACT_NOTICE ? (
          <TemporaryContactNotice />
        ) : submitted ? (
          <div className="contactDone">
            <div className="contactDoneIcon">🎉</div>
            <h3 className="contactDoneTitle">送信が完了しました！</h3>
            <p className="contactDoneText">
              メッセージをお送りいただきありがとうございます。<br />
              内容を確認のうえ、必要に応じてメンバーよりご連絡いたします。
            </p>
            <button onClick={() => setSubmitted(false)} className="secondaryButton contactResetButton">
              もう一度送る
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contactForm">
            <FormField id="name" label="お名前">
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={100}
                autoComplete="name"
                placeholder="山田 太郎"
                className="formControl"
              />
            </FormField>

            <FormField id="email" label="メールアドレス">
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="example@example.com"
                className="formControl"
              />
            </FormField>

            <FormField id="message" label="お問い合わせ内容">
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={6}
                placeholder="お問い合わせ内容をご記入ください。"
                className="formControl"
              />
            </FormField>

            <button type="submit" disabled={loading} className="primaryButton contactSubmit">
              {loading ? '送信中...' : '送信する'}
            </button>

            {error && (
              <p role="alert" className="contactError">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
