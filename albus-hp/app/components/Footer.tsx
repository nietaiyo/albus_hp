import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerBrand">
          <div className="logo" aria-label="Albus">
            <span>A</span>
            <span>l</span>
            <span>b</span>
            <span>u</span>
            <span>s</span>
            <span className="logoDot" aria-hidden="true">.</span>
          </div>
          <p className="footerSlogan">
            白鷺祭のためのWebアプリを開発する、<br />
            ものづくりが大好きな有志学生チームです。
          </p>
        </div>

        <div className="footerLinksGroup">
          <div className="footerLinkCol">
            <h4>Albusについて</h4>
            <Link href="/about">チーム紹介</Link>
            <Link href="/projects">制作実績</Link>
            <Link href="/news">活動報告</Link>
            <Link href="/contact">お問い合わせ</Link>
          </div>

          <div className="footerLinkCol">
            <h4>リンク</h4>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            <a href="https://www.shirasagifes.com" target="_blank" rel="noopener noreferrer">白鷺祭実行委員会 公式</a>
          </div>

          <div className="footerLinkCol">
            <h4>法的情報</h4>
            <Link href="/privacy">プライバシーポリシー</Link>
            <Link href="/terms">利用規約</Link>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} Albus. All rights reserved.</p>
      </div>
    </footer>
  );
}
