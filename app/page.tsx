import HomeContent from './components/HomeContent';
import { pageMetadata, SITE_DESCRIPTION } from './lib/site';

export const metadata = pageMetadata({
  description: SITE_DESCRIPTION,
  path: '/',
});

export default function Home() {
  return <HomeContent />;
}
