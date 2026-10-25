'use client';

import { useState } from 'react';

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

  // 送信処理（擬似APIリクエスト）
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
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

        {submitted ? (
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
              <input type="text" id="name" required placeholder="山田 太郎" className="formControl" />
            </FormField>

            <FormField id="email" label="メールアドレス">
              <input
                type="email"
                id="email"
                required
                placeholder="example@edu.osakafu-u.ac.jp"
                className="formControl"
              />
            </FormField>

            <FormField id="message" label="お問い合わせ内容">
              <textarea
                id="message"
                required
                rows={6}
                placeholder="お問い合わせ内容をご記入ください。"
                className="formControl"
              />
            </FormField>

            <button type="submit" disabled={loading} className="primaryButton contactSubmit">
              {loading ? '送信中...' : '送信する'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
