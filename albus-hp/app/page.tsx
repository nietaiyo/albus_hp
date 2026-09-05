'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TextScramble from './components/TextScramble';
import CodeConsole from './components/CodeConsole';

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [isFirstAccess, setIsFirstAccess] = useState(false);

  useEffect(() => {
    // セッション中に一度だけ表示する制御
    const hasSeenIntro = sessionStorage.getItem('hasSeenAlbusIntro');
    if (!hasSeenIntro) {
      setShowIntro(true);
      setIsFirstAccess(true);
      sessionStorage.setItem('hasSeenAlbusIntro', 'true');

      // アニメーション完了（3.2秒 + フェードアウト0.4秒）した後にDOMから削除
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 3600);
      return () => clearTimeout(timer);
    }
  }, []);

  // スクロール時のホログラムフェードイン監視
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.holoFadeIn');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const baseDelay = isFirstAccess ? 3600 : 0;

  return (
    <>
      {showIntro && (
        <div className="introOverlay">
          <div className="introLogo">
            Albus<span className="logoDot">.</span>
          </div>
        </div>
      )}
      <div className="homeContent">
        <div className="site">
          {/* ヒーローセクション */}
          <section className="hero">
            <div className="heroContainerWide">
              <div className="heroText">
                <p className="label">University Festival by Technology</p>
                <h1>
                  <span style={{ display: "inline-block" }}>
                    <TextScramble text="大学祭は" delay={baseDelay + 100} />
                  </span>
                  <span style={{ display: "inline-block" }}>
                    <TextScramble
                      text="テクノロジーで"
                      delay={baseDelay + 1300}
                    />
                  </span>
                  <span style={{ display: "inline-block" }}>
                    <TextScramble text="進化する" delay={baseDelay + 2500} />
                  </span>
                </h1>
                <p className="description">
                  Albus. は大学祭実行委員会向けのサービスを開発しています
                </p>
                <div className="actions">
                  <Link className="primaryButton" href="/projects">
                    制作物を見る
                  </Link>
                  <Link className="secondaryButton" href="/about">
                    チームについて
                  </Link>
                </div>
              </div>

              <CodeConsole />
            </div>
          </section>

          {/* 私たちの想い / 挨拶 */}
          <section
            id="about"
            className="section holoFadeIn"
            style={{ borderTop: "1px solid #e2e8f0", paddingTop: "56px" }}
          >
            <p className="label">Greeting</p>
            <h2>各大学祭に寄り添ったサービスを</h2>
            <p className="sectionText">
              各大学祭が抱える規模や来場者層、運営上の課題は決して一様ではありません。<br/>
              ラテン語で「白」を指す「Albus」の名のとおり、私たちは汎用的で誰でも作り使えるサービスではなく、それぞれの実情に応じたサービスを構築します。<br/>
              私たちはメンバー全員が大学祭実行委員会出身です。今までに培った経験や知見を活かし、学祭当日中のサポートだけでなく、年間を通じた運営効率化に寄与するソリューションをご提供します。
            </p>
          </section>

          {/* コンタクトへの誘い */}
          <section
            className="contact holoFadeIn"
            style={{ marginBottom: "56px" }}
          >
            <div>
              <p className="label" style={{ color: "#93c5fd" }}>
                Join us / Talk to us
              </p>
              <h2>お気軽にお問い合わせください。</h2>
            </div>
            <Link
              className="primaryButton"
              href="/contact"
              style={{
                background: "#ffffff",
                color: "#2563eb",
                boxShadow: "none",
              }}
            >
              お問い合わせ
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}