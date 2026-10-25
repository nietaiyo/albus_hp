// 臨時対応(yuiki.dev誘導)：お問い合わせフォームからメールが届かない間だけ表示する案内。
// フォームが直ったら、このファイルごと削除する（削除箇所は「臨時対応(yuiki.dev誘導)」で検索）
// メンバー募集ページ（app/recruit/page.tsx）もこの URL を連絡先にしている
export const TEMPORARY_CONTACT_URL = 'https://yuiki.dev';

export default function TemporaryContactNotice() {
  return (
    <div className="temporaryContactNotice">
      <p className="temporaryContactNoticeTitle">お問い合わせフォームは現在準備中です</p>
      <p className="temporaryContactNoticeText">
        お手数ですが、メンバーのサイト（yuiki.dev）右上の「Contact」ボタンからご連絡ください。
      </p>
      <a
        href={TEMPORARY_CONTACT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="primaryButton temporaryContactNoticeButton"
      >
        yuiki.dev を開く
      </a>
    </div>
  );
}
