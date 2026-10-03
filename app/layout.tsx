import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MouseSpotlight from "./components/MouseSpotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Albus公式HP",
  description: "Albus（アルバス）は、大学祭をより発展させるサービスを開発している、有志の学生チームです。",
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
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <MouseSpotlight />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

