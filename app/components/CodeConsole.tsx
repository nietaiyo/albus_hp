'use client';

import { useState, useEffect } from 'react';
import usePrefersReducedMotion from './usePrefersReducedMotion';

const fullText = [
  'import { Albus } from "albus-tech";',
  '',
  'const team = new Albus({',
  '  location: "大学祭実行委員会",',
  '  purpose: "大学祭を発展させる",',
  '  stack: ["Next.js", "TypeScript"]',
  '});',
  '',
  'await team.initialize();',
  '',
  'const app = team.deploy("Glossary");',
  'const message = app.startMessage();',
  '',
  'console.log(message);',
  '// >> 「大学祭はテクノロジーで進化する」'
];

const totalChars = fullText.reduce((sum, line) => sum + line.length, 0);

// 簡易シンタックスハイライト（キーを緑にする）
const renderLineContent = (line: string) => {
  const keys = ['location', 'purpose', 'stack'];
  for (const key of keys) {
    if (line.includes(`${key}:`)) {
      const parts = line.split(`${key}:`);
      return (
        <>
          {parts[0]}
          <span className="codeKeyGreen">{key}:{parts[1]}</span>
        </>
      );
    }
  }
  return line;
};

interface CodeConsoleProps {
  // false の間はタイピングを開始しない（イントロ表示中など）
  start?: boolean;
}

export default function CodeConsole({ start = true }: CodeConsoleProps) {
  // 入力済みの文字数（全行通し）
  const [typedCount, setTypedCount] = useState(0);
  const reduceMotion = usePrefersReducedMotion();
  // 動きを減らす設定のときはタイピングせず、開始と同時に全文を表示する
  const typed = start && reduceMotion ? totalChars : typedCount;

  useEffect(() => {
    if (!start || reduceMotion) return;

    const typingInterval = setInterval(() => {
      setTypedCount((n) => {
        if (n >= totalChars) {
          clearInterval(typingInterval);
          return n;
        }
        return n + 1;
      });
    }, 18);

    return () => clearInterval(typingInterval);
  }, [start, reduceMotion]);

  // 完成形の全行を最初から描画して高さを確保し、未入力部分は不可視にする（レイアウトシフト防止）
  const lineStates: { visibleLen: number; reached: boolean; isCursorLine: boolean }[] = [];
  let remaining = typed;
  // 直前までの行がすべて入力済みかどうか
  let prevComplete = true;
  for (let idx = 0; idx < fullText.length; idx++) {
    const line = fullText[idx];
    const reached: boolean = prevComplete;
    const visibleLen = Math.min(remaining, line.length);
    remaining -= visibleLen;
    prevComplete = reached && visibleLen === line.length;

    // カーソルは入力中の行（全行完了時は最終行）に置く
    const isLast = idx === fullText.length - 1;
    lineStates.push({ visibleLen, reached, isCursorLine: reached && (!prevComplete || isLast) });
  }

  return (
    <div className="codeConsole" aria-hidden="true">
      <div className="consoleHeader">
        <span className="consoleDot red"></span>
        <span className="consoleDot yellow"></span>
        <span className="consoleDot green"></span>
        <span className="consoleTitle">albus_app.ts</span>
      </div>
      <div className="consoleBody">
        {fullText.map((line, idx) => {
          const { visibleLen, reached, isCursorLine } = lineStates[idx];
          const isOutput = line.startsWith('// >>');
          return (
            <div
              key={idx}
              className={`consoleLine ${isOutput ? 'outputLine' : ''} ${reached ? '' : 'consoleLinePending'}`}
            >
              <span className="lineNum">{idx + 1}</span>
              <span className="lineContent">
                {renderLineContent(line.slice(0, visibleLen))}
                {isCursorLine && <span className="consoleCursor" />}
                <span className="consoleGhost">{line.slice(visibleLen)}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
