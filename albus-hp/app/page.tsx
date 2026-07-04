import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* イントロアニメーション */}
      <div className="intro">
        <div className="introLogo" aria-label="Albus">
          <span className="introLetter introLetterA">A</span>
          <span className="introLetter introLetterL">l</span>
          <span className="introLetter introLetterB">b</span>
          <span className="introLetter introLetterU">u</span>
          <span className="introLetter introLetterS">s</span>
          <span className="introDot" aria-hidden="true">
            .
          </span>
        </div>
      </div>

      <div className="homeContent">
        <div className="site">
          {/* ヒーローセクション */}
          <section className="hero">
            <div className="heroText">
              <p className="label">Osaka Metropolitan University</p>
              <h1>
                アイデアをカタチにして、
                <br />
                学園祭をもっと楽しく。
              </h1>
              <p className="description">
                Albus（アルバス）は、大阪公立大学の学園祭「白鷺祭」をより楽しむためのWebアプリやサービスを開発している、有志の学生ものづくりチームです。
              </p>
              <div className="actions">
                <Link className="primaryButton" href="/projects">
                  制作物を見る
                </Link>
                <Link className="secondaryButton" href="/about">
                  チームについて
                </Link>
              </div>
            </div>

            <div className="heroPanel">
              <div className="panelTop">
                <span />
                <span />
                <span />
              </div>
              <div className="codeCard" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '12px' }}>
                  「白鷺祭をもっと面白くしたい」
                </div>
                <div style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', maxWidth: '300px' }}>
                  そんな想いから生まれた有志チームです。デザインから開発まで、自分たちの手で作り上げています。
                </div>
              </div>
            </div>
          </section>

          {/* 私たちの想い / 挨拶 */}
          <section id="about" className="section" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '56px' }}>
            <p className="label">Greeting</p>
            <h2>白く、優しく、まっすぐに。</h2>
            <p className="sectionText">
              チーム名「Albus」はラテン語で「白」を意味します。
              何にも染まっていないキャンバスに、メンバーそれぞれの個性と情熱を描き、
              来場者や学生の皆さんが「本当に欲しかったもの」を形にします。
              技術の押し売りではなく、使う人の目線に立った温かみのあるプロダクトをお届けします。
            </p>
          </section>

          {/* サイトの活用方法 */}
          <section className="section" style={{ marginBottom: '56px' }}>
            <p className="label">How to use</p>
            <h2>このサイトの活用方法</h2>
            <div className="cards" style={{ marginTop: '32px' }}>
              <article className="card">
                <span>01</span>
                <h3>用語集をひらく</h3>
                <p>メイン制作物である「白鷺祭用語集」の簡単な使い方を紹介しています。白鷺祭のディープな魅力を知るためのお供にどうぞ。</p>
                <Link href="/projects" style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', marginTop: '12px' }}>
                  詳しく見る &rarr;
                </Link>
              </article>

              <article className="card">
                <span>02</span>
                <h3>開発中のアプリをのぞく</h3>
                <p>「こんなアプリがあったらいいな」を形にするため、Albusメンバーが現在構想・開発中の次期アプリの進捗状況を公開しています。</p>
                <Link href="/projects#future" style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', marginTop: '12px' }}>
                  開発予告へ &rarr;
                </Link>
              </article>

              <article className="card">
                <span>03</span>
                <h3>要望やアイデアを送る</h3>
                <p>「この用語を追加してほしい！」「こんな機能がほしい！」など、皆さんからの声を募る専用フォームを用意しています。</p>
                <Link href="/contact#request" style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', marginTop: '12px' }}>
                  フォームを開く &rarr;
                </Link>
              </article>
            </div>
          </section>

          {/* コンタクトへの誘い */}
          <section className="contact" style={{ marginBottom: '56px' }}>
            <div>
              <p className="label" style={{ color: '#93c5fd' }}>Join us / Talk to us</p>
              <h2>お気軽にお問い合わせください。</h2>
            </div>
            <Link className="primaryButton" href="/contact" style={{ background: '#ffffff', color: '#2563eb', boxShadow: 'none' }}>
              お問い合わせフォーム
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}