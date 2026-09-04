export default function News() {
  const newsList = [
    {
      date: '2026.06.20',
      category: 'Update',
      title: '白鷺祭用語集 v1.2.0 をリリースしました！キーワードあいまい検索に対応',
      desc: '多くのユーザー様から要望をいただいていた「あいまい検索」を導入しました。これにより、正式名称が分からなくても、関連する単語で用語を見つけやすくなりました。',
    },
    {
      date: '2026.05.15',
      category: 'Activity',
      title: '白鷺祭実行委員会との初打ち合わせを行いました',
      desc: '今年の大学祭での公式連携に向けて、実行委員会の担当部署と初めての意見交換会を行いました。模擬店のデータ共有や、マップナビアプリの動作テストなど、非常に前向きな対話ができました！',
    },
    {
      date: '2026.04.10',
      category: 'Blog',
      title: 'Next.js ＋ Firebase で大学祭アプリを爆速で作るための技術的な工夫',
      desc: '開発チーム「Albus」の技術ブログ第1弾。短期間のアクセス集中に耐えるFirebaseの設計ノウハウや、Next.jsの静的ジェネレーション（SSG）を活用してホスティングコストを極限まで抑えるアイデアを公開します。',
    },
  ];

  return (
    <div className="site">
      <div style={{ maxWidth: '800px', margin: '48px auto' }}>
        <p className="label">News & Blogs</p>
        <h1 style={{ fontSize: '36px', marginBottom: '40px' }}>活動報告とアップデート</h1>

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
