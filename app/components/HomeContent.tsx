'use client';

import { useState, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import TextScramble from './TextScramble';
import CodeConsole from './CodeConsole';

const INTRO_KEY = 'hasSeenAlbusIntro';

export default function HomeContent() {
  // イントロはサーバー描画時点から出しておき、表示済みなら layout の
  // インラインスクリプトが付ける html.introSeen で描画前に隠す（一瞬ページが見えるのを防ぐ）
  const [showIntro, setShowIntro] = useState(true);
  // ヒーローのアニメーションを開始してよいか（イントロ終了後）
  const [heroStart, setHeroStart] = useState(false);
  // スキップボタン・キー操作からイントロを終わらせる（中身は下の effect で設定する）
  const skipIntro = useRef<() => void>(() => {});

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

    // スキップ：待たずにすぐ終わらせる（表示済みの記録は上で保存済みなので、再読み込みしても出ない）
    skipIntro.current = () => {
      clearTimeout(timer);
      finish();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') skipIntro.current();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <>
      {showIntro && (
        <div className="introOverlay">
          <div className="introLogo">
            Albus<span className="logoDot">.</span>
          </div>
          <button type="button" className="introSkip" onClick={() => skipIntro.current()}>
            スキップ
          </button>
        </div>
      )}
      <div className="homeContent">
        <div className="site">
          {/* ヒーローセクション */}
          <section className="hero">
            <div className="heroContainerWide">
              <div className="heroText">
                <p className="label">For University Festivals</p>
                <h1>
                  <TextScramble text="大学祭の運営に、" start={heroStart} delay={100} speed={25} />
                  <TextScramble text="新しいあたりまえを。" start={heroStart} delay={350} speed={25} />
                </h1>
                <p className="heroSubcopy">テクノロジーで、もっと便利に、もっと自由に。</p>
                <p className="description">
                  Albus. は、大学祭実行委員会の出身者によるチームです。現場で感じてきた不便や手間を、それぞれの大学祭に合ったWebサービスで解消します。
                </p>
                <div className="actions">
                  <Link className="primaryButton" href="/projects">
                    プロジェクトを見る
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
          <section id="about" className="section greeting">
            <p className="label reveal">Our Approach</p>
            <h2 className="reveal">
              <span className="phrase">各大学祭に</span>
              <span className="phrase">寄り添った</span>
              <span className="phrase">サービスを</span>
            </h2>
            <p className="sectionText reveal">
              大学祭は、規模も来場者層も、実行委員会の体制もそれぞれ違います。だから私たちは、どこでも同じように使う汎用的な仕組みではなく、その大学祭の事情に合ったサービスをつくります。<br/>
              メンバーは全員、大学祭実行委員会の出身です。人の手で回してきた準備や当日の対応の大変さを知っているからこそ、大学祭当日だけでなく、一年を通した運営を支えます。
            </p>
          </section>

          {/* コンタクトへの誘い */}
          <section className="contact reveal">
            <div>
              <p className="label">Talk to us</p>
              <h2>運営の困りごと、<wbr />お聞かせください。</h2>
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