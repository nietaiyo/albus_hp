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
                  <span style={{ display: 'inline-block' }}><TextScramble text="大学祭は" delay={baseDelay + 100} /></span>
                  <span style={{ display: 'inline-block' }}><TextScramble text="テクノロジーで" delay={baseDelay + 1300} /></span>
                  <span style={{ display: 'inline-block' }}><TextScramble text="進化する" delay={baseDelay + 2500} /></span>
                </h1>
                <p className="description">
                  Albus（アルバス）は、大学祭を発展させるため、大学祭実行委員会向けのサービスを開発しています。
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
          <section id="about" className="section holoFadeIn" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '56px' }}>
            <p className="label">Greeting</p>
            <h2>白く、優しく、まっすぐに。</h2>
            <p className="sectionText">
              チーム名「Albus」はラテン語で「白」を意味します。
              何にも染まっていないキャンバスに、メンバーそれぞれの個性と情熱を描き、
              来場者や学生の皆さんが「本当に欲しかったもの」を形にします。
              技術の押し売りではなく、使う人の目線に立った温かみのあるプロダクトをお届けします。
            </p>
          </section>

          {/* サイトの活用方法 */}
          <section className="section holoFadeIn" style={{ marginBottom: '56px' }}>
            <p className="label">How to use</p>
            <h2>このサイトの活用方法</h2>
            <div className="cards" style={{ marginTop: '32px' }}>
              <article className="card">
                <span>01</span>
                <h3>用語集をひらく</h3>
                <p>メイン制作物である「白鷺祭用語集」の簡単な使い方を紹介しています。白鷺祭のディープな魅力を知るためのお供にどうぞ。</p>
                <Link href="/projects" style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', marginTop: '12px' }}>
                  詳しく見る &rarr;
                </Link>
              </article>

              <article className="card">
                <span>02</span>
                <h3>開発中のアプリをのぞく</h3>
                <p>「こんなアプリがあったらいいな」を形にするため、Albusメンバーが現在構想・開発中の次期アプリの進捗状況を公開しています。</p>
                <Link href="/projects#future" style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', marginTop: '12px' }}>
                  開発予告へ &rarr;
                </Link>
              </article>

              <article className="card">
                <span>03</span>
                <h3>要望やアイデアを送る</h3>
                <p>「この用語を追加してほしい！」「こんな機能がほしい！」など、皆さんからの声を募る専用フォームを用意しています。</p>
                <Link href="/contact#request" style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', marginTop: '12px' }}>
                  フォームを開く &rarr;
                </Link>
              </article>
            </div>
          </section>

          {/* コンタクトへの誘い */}
          <section className="contact holoFadeIn" style={{ marginBottom: '56px' }}>
            <div>
              <p className="label" style={{ color: '#93c5fd' }}>Join us / Talk to us</p>
              <h2>お気軽にお問い合わせください。</h2>
            </div>
            <Link className="primaryButton" href="/contact" style={{ background: '#ffffff', color: '#2563eb', boxShadow: 'none' }}>
              お問い合わせフォーム
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}