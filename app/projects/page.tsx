export default function Projects() {
  return (
    <div className="site">
      <div style={{ maxWidth: "900px", margin: "48px auto" }}>
        <section style={{ marginBottom: "80px" }}>
          Albus. では各大学祭に向けたサービスを開発しています。
        </section>

        <section style={{ marginBottom: "80px" }}>Live project</section>

        {/* メイン: 白鷺祭用語集 */}
        <section style={{ marginBottom: "80px" }}>
          <p className="label">白鷺祭実行委員会</p>
          <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>
            白鷺祭用語集
          </h1>
          <p
            className="sectionText"
            style={{ color: "#4b5563", fontSize: "16px", lineHeight: "1.8" }}
          >
            大阪公立大学の大学祭「白鷺祭」にまつわる独自の用語、キャンパス内の専門用語やマップを網羅したWebアプリケーションです。
            新メンバーの用語理解の補助や、既存メンバーの知識の補完に役立ちます。
          </p>
          {/* Todo: モック画像とでもはこちらのリンクボタン */}
        </section>

        {/* 予告: Under Development */}
        <section
          id="future"
          style={{
            marginBottom: "80px",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "48px",
          }}
        >
          <section style={{ marginBottom: "80px" }}>Active project</section>
          <p className="label">白鷺祭実行委員会</p>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
            落とし物サイト（仮）
          </h2>
          <p
            className="sectionText"
            style={{ color: "#4b5563", fontSize: "15px" }}
          >
            白鷺祭の落とし物確認・問い合わせをWeb上で完結させるサービスです。<br/>
            来場者による落とし物の検索・捜索依頼から、実行委員会による管理・対応までをオンライン上で一括サポート。
            問い合わせ対応の効率化と、迅速な返却を実現します。
          </p>
        </section>

        {/* 実験: Lab / Playground */}
        <section style={{ borderTop: "1px solid #e2e8f0", paddingTop: "48px" }}>
          <p className="label">Sand Box</p>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
            Coming soon...
          </h2>
        </section>
      </div>
    </div>
  );
}
