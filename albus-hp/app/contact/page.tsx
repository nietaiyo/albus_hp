'use client';

import { useState } from 'react';

export default function Contact() {
  const [activeTab] = useState<'inquiry' | 'request'>('inquiry');
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

  const resetForm = () => {
    setSubmitted(false);
  };

  return (
    <div className="site">
      <div style={{ maxWidth: '600px', margin: '48px auto' }}>
        <p className="label">Contact us</p>
        <h1 style={{ fontSize: '36px', marginBottom: '24px' }}>お問い合わせ</h1>
        <p className="sectionText" style={{ color: '#4b5563', marginBottom: '32px' }}>
          Albusへのご意見やご感想、コラボレーションのご提案などは以下のフォームよりお送りください。
          提供済みのサービスに関するお問い合わせや修正依頼は各サービスのお問い合わせフォームをご利用ください。
        </p>

        {submitted ? (
          <div
            style={{
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '12px',
              padding: '32px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.05)',
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
            <h3 style={{ color: '#1e3a8a', fontSize: '20px', margin: '0 0 8px 0' }}>送信が完了しました！</h3>
            <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', margin: '0 0 24px 0' }}>
              メッセージをお送りいただきありがとうございます。<br />
              内容を確認のうえ、必要に応じてメンバーよりご連絡いたします。
            </p>
            <button
              onClick={resetForm}
              className="secondaryButton"
              style={{ padding: '0 24px' }}
            >
              もう一度送る
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {activeTab === 'inquiry' ? (
              // 一般のお問い合わせフォーム
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>お名前</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="山田 太郎"
                    style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>メールアドレス</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="example@edu.osakafu-u.ac.jp"
                    style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>お問い合わせ内容</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="お問い合わせ内容をご記入ください。"
                    style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                  />
                </div>
              </>
            ) : (
              // 用語追加依頼・機能要望フォーム
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="reqType" style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>ご要望のタイプ</label>
                  <select
                    id="reqType"
                    required
                    style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                  >
                    <option value="word">用語追加のリクエスト</option>
                    <option value="feature">アプリ機能の要望</option>
                    <option value="bug">バグ・不具合の報告</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="title" style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>件名 / 追加したい用語</label>
                  <input
                    type="text"
                    id="title"
                    required
                    placeholder="例: 用語「モズナ」を追加してほしい"
                    style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="detail" style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>詳細内容</label>
                  <textarea
                    id="detail"
                    required
                    rows={6}
                    placeholder="追加したい理由や、機能の具体的なイメージをご記入ください。"
                    style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="primaryButton"
              style={{
                width: '100%',
                marginTop: '12px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? '送信中...' : '送信する'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
