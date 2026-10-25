'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'News', path: '/news' },
  { name: 'Recruit', path: '/recruit' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // メニュー表示中は背景のスクロールを止め、Escキーで閉じられるようにする
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  // PC 幅に広げたときは、開いたままのメニューを閉じる（PC ではメニューを表示しないため）
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 769px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };
    desktop.addEventListener('change', onChange);
    return () => desktop.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      {/* メニュー表示中に背景をぼかして暗くする。タップすると閉じる */}
      <div
        className={`menuScrim ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <header className={`header ${isOpen ? 'menuOpen' : ''}`}>
        <div className="headerContainer">
          <Link href="/" className="logoLink">
            <Logo />
          </Link>

          <div className="headerActions">
            {/* デスクトップナビゲーション */}
            <nav className="desktopNav">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`navLink ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <ThemeToggle />

            {/* モバイルハンバーガーボタン */}
            <button
              className={`hamburger ${isOpen ? 'open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="メニューを開閉"
              aria-expanded={isOpen}
              aria-controls="mobileMenu"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>

        {/* モバイルメニュー：ヘッダーのバーがそのまま下に伸び、その中に項目を並べる（スタイルは globals.css の Mobile Menu） */}
        <div id="mobileMenu" className="mobileMenu" inert={!isOpen}>
          <div className="mobileMenuClip">
            <nav className="mobileNav" aria-label="メインメニュー">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`mobileNavLink ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    // 項目を上から順番に表示するための並び順（CSS の --i で遅延を計算する）
                    style={{ '--i': idx } as React.CSSProperties}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
