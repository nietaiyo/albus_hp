export default function Projects() {
  return (
    <div className="site">
      <div className="pageContainer pageContainerWide">
        <section className="projectSection">
          Albus. では各大学祭に向けたサービスを開発しています。
        </section>

        <section className="projectSection">Live project</section>

        {/* メイン: 白鷺祭用語集 */}
        <section className="projectSection">
          <p className="label">白鷺祭実行委員会</p>
          <h1 className="pageTitle projectTitle">白鷺祭用語集</h1>
          <p className="sectionText pageText">
            大阪公立大学の大学祭「白鷺祭」にまつわる独自の用語、キャンパス内の専門用語やマップを網羅したWebアプリケーションです。
            新メンバーの用語理解の補助や、既存メンバーの知識の補完に役立ちます。
          </p>
          {/* Todo: モック画像とでもはこちらのリンクボタン */}
        </section>

        {/* 予告: Under Development */}
        <section id="future" className="projectSection pageSectionDivided">
          <section className="projectSection">Active project</section>
          <p className="label">白鷺祭実行委員会</p>
          <h2 className="pageHeading">落とし物サイト（仮）</h2>
          <p className="sectionText pageText projectNote">
            白鷺祭の落とし物確認・問い合わせをWeb上で完結させるサービスです。<br/>
            来場者による落とし物の検索・捜索依頼から、実行委員会による管理・対応までをオンライン上で一括サポート。
            問い合わせ対応の効率化と、迅速な返却を実現します。
          </p>
        </section>

        {/* 実験: Lab / Playground */}
        <section className="pageSectionDivided">
          <p className="label">Sand Box</p>
          <h2 className="pageHeading">Coming soon...</h2>
        </section>
      </div>
    </div>
  );
}
