import { pageMetadata } from '../lib/site';

// page.tsx がクライアントコンポーネントのため、メタデータはここで指定する
export const metadata = pageMetadata({
  title: 'お問い合わせ',
  description:
    'Albus. へのお問い合わせ・ご相談はこちら。大学祭向けサービスの導入相談や、メンバーへの参加希望などお気軽にご連絡ください。',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
