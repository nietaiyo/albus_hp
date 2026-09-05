'use client';

import { useState, useEffect } from 'react';

export default function CodeConsole() {
  const [lines, setLines] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

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

  useEffect(() => {
    // カーソルの点滅
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    let currentLineIdx = 0;
    let currentCharIdx = 0;
    const currentLines: string[] = [''];

    const typingInterval = setInterval(() => {
      if (currentLineIdx >= fullText.length) {
        clearInterval(typingInterval);
        return;
      }

      const targetLine = fullText[currentLineIdx];

      if (currentCharIdx < targetLine.length) {
        currentLines[currentLineIdx] += targetLine[currentCharIdx];
        setLines([...currentLines]);
        currentCharIdx++;
      } else {
        // 改行処理
        currentLineIdx++;
        if (currentLineIdx < fullText.length) {
          currentLines.push('');
          currentCharIdx = 0;
        }
      }
    }, 18); // タイピング速度を18msに高速化

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typingInterval);
    };
  }, []);

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

  return (
    <div className="codeConsole">
      <div className="consoleHeader">
        <span className="consoleDot red"></span>
        <span className="consoleDot yellow"></span>
        <span className="consoleDot green"></span>
        <span className="consoleTitle">albus_app.ts</span>
      </div>
      <div className="consoleBody">
        {lines.map((line, idx) => {
          const isLast = idx === lines.length - 1;
          const isOutput = line.startsWith('// >>');
          return (
            <div key={idx} className={`consoleLine ${isOutput ? 'outputLine' : ''}`}>
              <span className="lineNum">{idx + 1}</span>
              <span className="lineContent">
                {renderLineContent(line)}
                {isLast && cursorVisible && <span className="consoleCursor">_</span>}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
