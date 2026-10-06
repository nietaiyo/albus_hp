'use client';

import { useState, useEffect } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

interface TextScrambleProps {
  text: string;
  speed?: number;
  delay?: number;
  // false の間はアニメーションを開始しない（イントロ表示中など）
  start?: boolean;
}

// 日本語と親和性の高いスクランブル用文字プール
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZカタカナアオウエシスケコサタツトハミムメモ!?@#';

export default function TextScramble({ text, speed = 40, delay = 0, start = true }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState('');
  const [finished, setFinished] = useState(false);
  const reduceMotion = usePrefersReducedMotion();
  // 動きを減らす設定のときはアニメーションせず、開始と同時に確定表示する
  const done = finished || (start && reduceMotion);

  useEffect(() => {
    if (!start || reduceMotion) return;

    let isMounted = true;
    let frameTimeout: ReturnType<typeof setTimeout>;

    const startTimeout = setTimeout(() => {
      let frame = 0;
      const queue: { to: string; start: number; end: number; char?: string }[] = [];

      // 文字のインデックス(i)に応じて、シャッフル開始と確定のタイミングを左から右へずらす
      for (let i = 0; i < text.length; i++) {
        const charStart = i * 4;
        queue.push({ to: text[i], start: charStart, end: charStart + 8 });
      }

      function update() {
        if (!isMounted) return;

        let output = '';
        let complete = 0;

        for (const item of queue) {
          if (frame >= item.end) {
            complete++;
            output += item.to;
          } else if (frame >= item.start) {
            if (!item.char || Math.random() < 0.3) {
              item.char = chars[Math.floor(Math.random() * chars.length)];
            }
            output += item.char;
          }
        }

        setDisplayText(output);

        if (complete === queue.length) {
          setFinished(true);
          return;
        }

        frame++;
        frameTimeout = setTimeout(() => requestAnimationFrame(update), speed);
      }

      update();
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
      clearTimeout(frameTimeout);
    };
  }, [text, speed, delay, start, reduceMotion]);

  // 確定後の文字を最初からDOMに置いて場所を確保し（SEO・読み上げ用にも残す）、
  // アニメーション中の文字は上に重ねて表示する
  return (
    <span className="scramble">
      <span className={done ? undefined : 'scrambleHidden'}>{text}</span>
      {!done && (
        <span className="scrambleOverlay" aria-hidden="true">
          {displayText}
        </span>
      )}
    </span>
  );
}
