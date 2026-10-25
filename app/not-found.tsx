import type { Metadata } from 'next';
import Link from 'next/link';

// 存在しない URL にアクセスされたときのページ（404 のページには Next.js が noindex を自動で付ける）
export const metadata: Metadata = {
  title: 'ページが見つかりません',
};

export default function NotFound() {
  return (
    <div className="site">
      <div className="pageContainer notFound">
        <p className="notFoundCode" aria-hidden="true">
          404
        </p>
        <p className="label">Page Not Found</p>
        <h1 className="pageTitle">ページが見つかりません</h1>
        <p className="sectionText pageText">
          お探しのページは、移動または削除された可能性があります。URLに誤りがないか、あわせてご確認ください。
        </p>
        <div className="actions">
          <Link className="primaryButton" href="/">
            トップページへ
          </Link>
          <Link className="secondaryButton" href="/projects">
            プロジェクトを見る
          </Link>
        </div>
      </div>
    </div>
  );
}
