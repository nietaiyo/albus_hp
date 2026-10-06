// カテゴリごとのバッジ色（未定義のカテゴリは紫）
const categoryClass: Record<string, string> = {
  Update: 'newsBadgeUpdate',
  Activity: 'newsBadgeActivity',
};

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
      <div className="pageContainer">
        <p className="label">News</p>
        <h1 className="pageTitle newsTitle">活動報告</h1>

        <div className="cardList">
          {newsList.map((item, idx) => (
            <article key={idx} className="panel newsCard">
              <div className="newsMeta">
                <span className="newsDate">{item.date}</span>
                <span className={`newsBadge ${categoryClass[item.category] ?? ''}`}>
                  {item.category}
                </span>
              </div>
              <h2 className="newsItemTitle">{item.title}</h2>
              <p className="newsItemText">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
