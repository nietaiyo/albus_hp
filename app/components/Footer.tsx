import Link from 'next/link';
import Logo from './Logo';
import { SHOW_RECRUIT } from '../lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerBrand">
          <Logo />
          <p className="footerSlogan">
            大学祭の運営に、新しいあたりまえを。
          </p>
        </div>

        <div className="footerLinksGroup">
          <div className="footerLinkCol">
            <h4>Albusについて</h4>
            <Link href="/about">チームについて</Link>
            <Link href="/projects">プロジェクト</Link>
            <Link href="/news">活動報告</Link>
            {/* 非表示中(メンバー募集) */}
            {SHOW_RECRUIT && <Link href="/recruit">メンバー募集</Link>}
            <Link href="/contact">お問い合わせ</Link>
          </div>

          <div className="footerLinkCol">
            {/* <h4>リンク</h4> */}
            {/* GitHubは整理後に公開 */}
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
