'use client';

import { useState } from "react";
import type { ChangeEvent, FormEvent} from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading] = useState(false);

  const [ formData, setFormData ] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    })) 
  }

  // 送信処理
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/send-email", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })

    if (response.ok) {
      alert("メールを送信しました");
      setFormData(initialFormData)
    } else {
      alert("送信に失敗しました\n時間をおいて再試行してください");
    }
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
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="name" style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>お名前</label>
                <input
                  type="text"
                  id="name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@edu.osakafu-u.ac.jp"
                  style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="message" style={{ fontSize: '14px', fontWeight: 'bold', color: '#374151' }}>お問い合わせ内容</label>
                <textarea
                  id="message"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="お問い合わせ内容をご記入ください。"
                  style={{ padding: '10px 14px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none', resize: 'vertical' }}
                />
              </div>
            </>

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
