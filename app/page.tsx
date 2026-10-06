'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import TextScramble from './components/TextScramble';
import CodeConsole from './components/CodeConsole';

const INTRO_KEY = 'hasSeenAlbusIntro';

export default function Home() {
  // イントロはサーバー描画時点から出しておき、表示済みなら layout の
  // インラインスクリプトが付ける html.introSeen で描画前に隠す（一瞬ページが見えるのを防ぐ）
  const [showIntro, setShowIntro] = useState(true);
  // ヒーローのアニメーションを開始してよいか（イントロ終了後）
  const [heroStart, setHeroStart] = useState(false);

  // 描画前に判定し、表示済みのときにイントロが一瞬出るのを防ぐ
  useLayoutEffect(() => {
    const finish = () => {
      document.documentElement.classList.add('introSeen');
      setShowIntro(false);
      setHeroStart(true);
    };

    // アニメーション完了（3.2秒 + フェードアウト0.4秒）した後にDOMから削除
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduceMotion ? 600 : 3600;

    // セッション中に一度だけ表示する。開始時刻を保存しておくことで、
    // 開発モードの effect 二重実行でもイントロが途中で消えないようにする
    let startedAt = Date.now();
    try {
      const saved = Number(sessionStorage.getItem(INTRO_KEY));
      if (saved > 0) startedAt = saved;
      else sessionStorage.setItem(INTRO_KEY, String(startedAt));
    } catch {
      // ストレージが使えない環境では毎回イントロを出す
    }

    const remaining = duration - (Date.now() - startedAt);
    // introSeen が既にある＝ layout のスクリプトでイントロを隠し済み（イントロ途中での再読み込みを含む）
    if (remaining <= 0 || document.documentElement.classList.contains('introSeen')) {
      finish();
      return;
    }

    const timer = setTimeout(finish, remaining);
    return () => clearTimeout(timer);
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
                  <TextScramble text="大学祭は" start={heroStart} delay={100} />
                  <TextScramble text="テクノロジーで" start={heroStart} delay={700} />
                  <TextScramble text="進化する" start={heroStart} delay={1300} />
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

              <CodeConsole start={heroStart} />
            </div>
          </section>

          {/* 私たちの想い / 挨拶 */}
          <section id="about" className="section greeting holoFadeIn">
            <p className="label">Greeting</p>
            <h2>各大学祭に寄り添ったサービスを</h2>
            <p className="sectionText">
              各大学祭が抱える規模や来場者層、運営上の課題は決して一様ではありません。<br/>
              ラテン語で「白」を指す「Albus」の名のとおり、私たちは汎用的で誰でも作り使えるサービスではなく、それぞれの実情に応じたサービスを構築します。<br/>
              私たちはメンバー全員が大学祭実行委員会出身です。今までに培った経験や知見を活かし、学祭当日中のサポートだけでなく、年間を通じた運営効率化に寄与するソリューションをご提供します。
            </p>
          </section>

          {/* コンタクトへの誘い */}
          <section className="contact holoFadeIn">
            <div>
              <p className="label">Join us / Talk to us</p>
              <h2>お気軽にお問い合わせください。</h2>
            </div>
            <Link className="primaryButton" href="/contact">
              お問い合わせ
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}