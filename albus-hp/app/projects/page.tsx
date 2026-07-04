import Link from 'next/link';

export default function Projects() {
  const steps = [
    { num: '01', title: '検索窓に入力する', desc: '知りたい単語や模擬店の名前などを、あいまい検索できます。' },
    { num: '02', title: 'カテゴリで絞り込む', desc: '「歴史」「グルメ」「場所」など、気になるジャンルから探せます。' },
    { num: '03', title: 'ディープな情報を楽しむ', desc: 'ただの用語解説ではなく、学生チームならではのちょっとした裏話やおすすめ情報も掲載しています。' },
  ];

  return (
    <div className="site">
      <div style={{ maxWidth: '900px', margin: '48px auto' }}>
        
        {/* メイン: 白鷺祭用語集 (Glossary) */}
        <section style={{ marginBottom: '80px' }}>
          <p className="label">Main Project</p>
          <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>白鷺祭用語集 (Glossary)</h1>
          <p className="sectionText" style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.8' }}>
            「白鷺祭用語集」は、大阪公立大学の伝統ある学園祭「白鷺祭」にまつわる独自の用語、模擬店の裏事情、歴史、そしてキャンパス内の専門用語を網羅したWebアプリケーションです。
            初めて来場される方も、普段通っている学生も、白鷺祭を10倍楽しめるディープな情報を発信しています。
          </p>

          {/* 簡易モックアップ風のUI */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '32px',
              margin: '32px 0',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
            }}
          >
            <div style={{ borderBottom: '2px solid #eff6ff', paddingBottom: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', color: '#1e3a8a' }}>🔍 用語集アプリ プレビュー</span>
              <span style={{ fontSize: '12px', color: '#2563eb', background: '#eff6ff', padding: '4px 8px', borderRadius: '4px' }}>v1.2.0 公開中</span>
            </div>
            
            {/* 検索バーデモ */}
            <div style={{ background: '#f8fbff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '12px 16px', color: '#94a3b8', fontSize: '14px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>例: 「しらさぎ」「芝生広場」...</span>
              <span style={{ background: '#2563eb', color: 'white', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold' }}>検索</span>
            </div>

            {/* 用語カード例 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '16px' }}>白鷺祭 (しらさぎさい)</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#4b5563', lineHeight: '1.5' }}>大阪公立大学中百舌鳥キャンパスで開催される秋の巨大イベント。毎年多くの出店やステージ企画で賑わう。</p>
              </div>
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '16px' }}>モズナ (マスコット)</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#4b5563', lineHeight: '1.5' }}>白鷺祭の公認キャラクター。キャンパス内のモズや鷺をモチーフにした愛らしい姿で子供たちに大人気。</p>
              </div>
            </div>
          </div>

          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>簡単な使い方</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', margin: '24px 0' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ background: '#ffffff', border: '1px solid #f1f5f9', borderRadius: '8px', padding: '20px' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2563eb', display: 'block', marginBottom: '8px' }}>{step.num}</span>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{step.title}</h4>
                <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <a
              href="https://glossary.albus.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="primaryButton"
            >
              用語集アプリを使ってみる &rarr;
            </a>
          </div>
        </section>

        {/* 予告: Future App A */}
        <section id="future" style={{ marginBottom: '80px', borderTop: '1px solid #e2e8f0', paddingTop: '48px' }}>
          <p className="label">Next Project</p>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>【予告】模擬店リアルタイム混雑チェッカー</h2>
          <p className="sectionText" style={{ color: '#4b5563', fontSize: '15px' }}>
            「どの模擬店がどれくらい並んでいるのか分からない…」そんな悩みを解消するため、学園祭当日に各出店の待ち時間や混雑状況をリアルタイムで投稿・確認できるマップ型ウェブアプリを企画中です。
          </p>
          
          {/* 進捗ロードマップ */}
          <div style={{ background: '#f8fbff', border: '1px solid #eff6ff', borderRadius: '12px', padding: '24px', marginTop: '24px' }}>
            <h4 style={{ margin: '0 0 16px 0', color: '#1e3a8a' }}>開発ロードマップと進捗</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ background: '#2563eb', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>完了</span>
                <span style={{ fontSize: '14px', color: '#1f2937' }}>UIデザイン・画面設計のフィードバック収集</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ background: '#2563eb', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>進行中</span>
                <span style={{ fontSize: '14px', color: '#1f2937' }}>Firebase Realtime Databaseを用いた同期機能の実装</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ background: '#94a3b8', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>未着手</span>
                <span style={{ fontSize: '14px', color: '#64748b' }}>白鷺祭実行委員会との連携テスト（2026年9月予定）</span>
              </div>
            </div>
          </div>
        </section>

        {/* 実験: Lab / Playground */}
        <section style={{ borderTop: '1px solid #e2e8f0', paddingTop: '48px' }}>
          <p className="label">Lab / Playground</p>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>実験室と小ネタの供養</h2>
          <p className="sectionText" style={{ color: '#4b5563', fontSize: '15px', marginBottom: '32px' }}>
            正式リリースには至らなかったものの、開発中に生まれたプロトタイプや、ボツになってしまったアイデアたちを供養するコーナーです。
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', background: '#ffffff' }}>
              <span style={{ fontSize: '11px', color: '#dc2626', background: '#fef2f2', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>ボツ案</span>
              <h4 style={{ margin: '8px 0 8px 0', fontSize: '16px' }}>白鷺祭の過去10年の雨天確率シミュレーター</h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
                お祭りの日の天気を過去の気象庁データから予測するツール。お祭りの性質上、雨天でも開催されるため「使う場面が少ない」と判断されボツに。
              </p>
            </div>
            
            <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', background: '#ffffff' }}>
              <span style={{ fontSize: '11px', color: '#2563eb', background: '#eff6ff', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>プロトタイプ</span>
              <h4 style={{ margin: '8px 0 8px 0', fontSize: '16px' }}>モズナのドット絵アニメーションジェネレーター</h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
                ブラウザ上で動くモズナのドット絵作成ツール。動くドット絵GIFが作れます。現在メンバーの遊び場としてこっそり公開中。
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
