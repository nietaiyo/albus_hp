import type { Metadata } from 'next';

// 本番URL（canonical・sitemap・OGP の基準）。ドメインを変えるときは NEXT_PUBLIC_SITE_URL で上書きできる
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://albus-tech.org').replace(/\/$/, '');

export const SITE_NAME = 'Albus.';

// メインキャッチコピー（構造化データの slogan にも使う）
export const SITE_SLOGAN = '大学祭の運営に、新しいあたりまえを。';

export const DEFAULT_TITLE = `Albus.（アルバス）| ${SITE_SLOGAN}`;

// SNS・検索結果で共有されるときの画像（public/Albus-OGP.png）
export const OG_IMAGE = {
  url: '/Albus-OGP.png',
  width: 1671,
  height: 941,
  alt: `Albus. ${SITE_SLOGAN}`,
};

export const SITE_DESCRIPTION =
  'Albus.（アルバス）は、大学祭実行委員会の出身者によるチームです。現場で感じてきた不便や手間を、それぞれの大学祭に合ったWebサービスで解消し、大学祭の運営を支えます。';

// 非表示中(メンバー募集)：メンバー募集ページと、そこへの入口（ヘッダー・フッター・About・sitemap）を出すかどうか。
// 再開するときは true にする（関係する箇所は「非表示中(メンバー募集)」で検索）
export const SHOW_RECRUIT = false;

// sitemap.xml に載せるページ（ヘッダーのナビと揃える）
const ALL_PAGES = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/news', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/recruit', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.5 },
] as const;

export const PAGES = ALL_PAGES.filter((page) => SHOW_RECRUIT || page.path !== '/recruit');

// ページごとの title / description / canonical / OGP をまとめて作る。
// openGraph は親とマージされず丸ごと置き換わる（画像も消える）ため、共通項目もここで毎回指定する
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'ja_JP',
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: path,
      images: OG_IMAGE,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: OG_IMAGE,
    },
  };
}
