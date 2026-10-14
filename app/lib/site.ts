import type { Metadata } from 'next';

// 本番URL。NEXT_PUBLIC_SITE_URL（独自ドメイン）を優先し、未設定なら Vercel の本番ドメインを使う
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

export const SITE_NAME = 'Albus.';

export const DEFAULT_TITLE = 'Albus.（アルバス）公式サイト | 大学祭をテクノロジーで支える学生チーム';

// app/opengraph-image.tsx で生成する共有用画像
const OG_IMAGE = '/opengraph-image';

export const SITE_DESCRIPTION =
  'Albus（アルバス）は、大学祭をより発展させるサービスを開発している、学祭実行委員会OBによる有志の学生チームです。白鷺祭用語集などのWebサービスを開発しています。';

// sitemap.xml に載せるページ（ヘッダーのナビと揃える）
export const PAGES = [
  { path: '/', changeFrequency: 'monthly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/news', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.5 },
] as const;

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
