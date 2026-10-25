import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MouseSpotlight from "./components/MouseSpotlight";
import ThemeScript from "./components/ThemeScript";
import { DEFAULT_TITLE, OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_SLOGAN, SITE_URL } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  // public/favicon.png をタブ・ブックマーク・ホーム画面のアイコンに使う
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: OG_IMAGE,
  },
  twitter: { card: "summary_large_image", images: OG_IMAGE },
  // Search Console の「HTML タグ」認証。content の値を環境変数に設定する
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

// 検索結果にサイト名・組織情報を出すための構造化データ
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ["Albus", "アルバス"],
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ["Albus", "アルバス"],
      description: SITE_DESCRIPTION,
      slogan: SITE_SLOGAN,
    },
  ],
};

// 描画前に実行し、このセッションでイントロ表示済みなら html.introSeen を付けて隠す
const introScript = `try{if(sessionStorage.getItem('hasSeenAlbusIntro'))document.documentElement.classList.add('introSeen')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        {/* JavaScript が動かない環境ではフェードインできないため、最初から表示しておく */}
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MouseSpotlight />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

