'use client';

import { useSyncExternalStore } from 'react';
import { THEME_KEY, type Theme } from '../lib/theme';

// テーマは html[data-theme] を正とする（初期値は ThemeScript が描画前に設定）
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

const getTheme = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

export default function ThemeToggle() {
  // サーバー描画時はテーマが分からないので light 扱い。つまみの位置は CSS が data-theme から決めるので見た目はずれない
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'light' as Theme);
  const isDark = theme === 'dark';

  const toggle = () => {
    const next: Theme = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="ダークモード"
      className="themeToggle"
      onClick={toggle}
    >
      <span className="themeToggleKnob" aria-hidden="true">
        {/* 太陽 */}
        <svg className="themeIconSun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
        {/* 月 */}
        <svg className="themeIconMoon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
