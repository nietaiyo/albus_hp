import { pageMetadata } from '../lib/site';

export const metadata = pageMetadata({
  title: '活動報告',
  description:
    'Albus. の活動報告。サービスの公開や開発の進み具合など、日々の活動をお知らせします。',
  path: '/news',
});

// カテゴリごとのバッジ色（未定義のカテゴリは紫）
const categoryClass: Record<string, string> = {
  Update: 'newsBadgeUpdate',
  Activity: 'newsBadgeActivity',
};

export default function News() {
  // 新しいお知らせは先頭に追加する
  const newsList = [
    {
      date: '2026.10.25',
      category: 'Update',
      title: '公式サイトをリニューアルしました',
      desc: 'デザインを一新し、ダークモードにも対応しました。プロジェクトページでは、Albus. が開発しているサービスをタイル形式で紹介しています。',
    },
    {
      date: '2026.10.25',
      category: 'Activity',
      title: '迷子・落とし物サイトの開発・運用が決定しました',
      desc: '大学祭の迷子・落とし物情報を扱うWebサービスを開発しています。来場者は品名・色・場所から自分で探すことができ、実行委員は専用画面から情報を管理できます。今年の大学祭で実際に運用する予定です。',
    },
    {
      date: '2025.12.31',
      category: 'Release',
      title: '大学祭用語集リリース',
      desc: 'エクセルベースだった用語集をWebアプリ化し、大学祭実行委員会のメンバーに公開しました。',
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
