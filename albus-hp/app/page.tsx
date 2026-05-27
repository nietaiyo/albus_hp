export default function Home() {
  return (
    <main className="site">
      <header className="header">
        <div className="logo">Albus</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="label">Development Team</p>
          <h1>
            Ideas into
            <br />
            elegant
            <br />
            digital products.
          </h1>
          <p className="description">
            Albusは、Webアプリケーション、UI設計、システム開発を通して、
            シンプルで使いやすいプロダクトをつくる開発チームです。
          </p>
          <div className="actions">
            <a className="primaryButton" href="#contact">
              Contact us
            </a>
            <a className="secondaryButton" href="#works">
              View works
            </a>
          </div>
        </div>

        <div className="heroPanel">
          <div className="panelTop">
            <span />
            <span />
            <span />
          </div>
          <div className="codeCard">
            <p>const team = "Albus";</p>
            <p>build("clean", "fast", "scalable");</p>
            <p>ship(product);</p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <p className="label">About</p>
        <h2>白く、軽く、まっすぐに。</h2>
        <p className="sectionText">
          Albusは、無駄をそぎ落とした設計と、実用性の高い開発を大切にしています。
          見た目の美しさだけでなく、運用しやすく成長できるプロダクトを目指します。
        </p>
      </section>

      <section id="works" className="cards">
        <article className="card">
          <span>01</span>
          <h3>Web Application</h3>
          <p>Next.jsやReactを使った高速で扱いやすいWebアプリを開発します。</p>
        </article>

        <article className="card">
          <span>02</span>
          <h3>UI Design</h3>
          <p>ユーザーが迷わず使える、洗練されたインターフェースを設計します。</p>
        </article>

        <article className="card">
          <span>03</span>
          <h3>System Build</h3>
          <p>チームや事業の成長に合わせて拡張できるシステムを構築します。</p>
        </article>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="label">Contact</p>
          <h2>Let’s build something clear.</h2>
        </div>
        <a className="primaryButton" href="mailto:hello@albus.dev">
          hello@albus.dev
        </a>
      </section>
    </main>
  );
}