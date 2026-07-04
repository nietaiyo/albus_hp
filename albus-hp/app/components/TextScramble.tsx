'use client';

import { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  speed?: number;
  delay?: number;
}

export default function TextScramble({ text, speed = 40, delay = 0 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState('');
  // 日本語と親和性の高いスクランブル用文字プール
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZカタカナアオウエシスケコサタツトハミムメモ!?@#';

  useEffect(() => {
    let isMounted = true;
    
    const startTimeout = setTimeout(() => {
      let frame = 0;
      const queue: { from: string; to: string; start: number; end: number; char?: string }[] = [];
      
      // 最初は何も表示しない空文字状態からスタートし、徐々に確定させていく
      for (let i = 0; i < text.length; i++) {
        const from = '';
        const to = text[i];
        const start = Math.floor(Math.random() * 15);
        const end = start + Math.floor(Math.random() * 15) + 10;
        queue.push({ from, to, start, end });
      }

      let animationFrameId: number;

      function update() {
        let output = '';
        let complete = 0;

        for (let i = 0; i < queue.length; i++) {
          const { to, start, end } = queue[i];
          if (frame >= end) {
            complete++;
            output += to;
          } else if (frame >= start) {
            if (!queue[i].char || Math.random() < 0.3) {
              queue[i].char = chars[Math.floor(Math.random() * chars.length)];
            }
            output += queue[i].char;
          } else {
            // 開始前は何も表示しない
            output += '';
          }
        }

        if (isMounted) {
          setDisplayText(output);
        }

        if (complete === queue.length) {
          return;
        }

        frame++;
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(update);
        }, speed);
      }

      update();
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
    };
  }, [text, speed, delay]);

  return <span>{displayText}</span>;
}
