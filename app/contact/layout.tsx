import { pageMetadata } from '../lib/site';

// page.tsx がクライアントコンポーネントのため、メタデータはここで指定する
export const metadata = pageMetadata({
  title: 'お問い合わせ',
  description:
    '大学祭の運営に関するご相談はこちらから。サービスの導入だけでなく、「こんなことで困っている」という段階のお話も歓迎します。',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
