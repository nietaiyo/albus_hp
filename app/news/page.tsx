export default function News() {
  const newsList = [
    {
      date: '2025.12.31',
      category: 'Start',
      title: '白鷺祭用語集リリース',
      desc: 'エクセルベースだった用語集をWebアプリ化し、白鷺祭実行委員会のメンバーに公開しました。',
    },
  ];

  return (
    <div className="site">
      <div style={{ maxWidth: '800px', margin: '48px auto' }}>
        <p className="label">News</p>
        <h1 style={{ fontSize: '36px', marginBottom: '40px' }}>活動報告</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {newsList.map((item, idx) => (
            <article
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '28px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '13px', color: '#64748b', fontFamily: 'monospace' }}>{item.date}</span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    color:
                      item.category === 'Update'
                        ? '#16a34a'
                        : item.category === 'Activity'
                        ? '#2563eb'
                        : '#7c3aed',
                    background:
                      item.category === 'Update'
                        ? '#f0fdf4'
                        : item.category === 'Activity'
                        ? '#eff6ff'
                        : '#f5f3ff',
                  }}
                >
                  {item.category}
                </span>
              </div>
              <h2 style={{ fontSize: '20px', margin: '0 0 12px 0', color: '#0f172a', lineHeight: '1.4' }}>
                {item.title}
              </h2>
              <p style={{ margin: 0, fontSize: '14px', color: '#4b5563', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
