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
            <span className="logoDot" aria-hidden="true">
              .
            </span>
          </div>
          <p className="footerSlogan">大学祭はテクノロジーで進化する</p>
        </div>

        <div className="footerLinksGroup">
          <div className="footerLinkCol">
            <h4>Albusについて</h4>
            <Link href="/about">チーム・メンバー</Link>
            <Link href="/projects">プロジェクト</Link>
            <Link href="/news">活動報告</Link>
            <Link href="/contact">お問い合わせ</Link>
          </div>

          <div className="footerLinkCol">
            {/* <h4>リンク</h4> */}
            {/* githubは整理後に公開 */}
            {/* <a href="https://github.com/albus-sys" target="_blank" rel="noopener noreferrer">GitHub</a> */}
            {/* Twitterはアカウント作成後に公開 */}
            {/* <a href="https://x.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a> */}
            <h4>提供先実行委員会</h4>
            <a href="https://sagisai.net/" target="_blank" rel="noopener noreferrer">
              白鷺祭実行委員会
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} Albus. All rights reserved.</p>
      </div>
    </footer>
  );
}
