'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="header">
        <div className="headerContainer">
          <Link href="/" className="logoLink">
            <div className="logo" aria-label="Albus">
              <span>A</span>
              <span>l</span>
              <span>b</span>
              <span>u</span>
              <span>s</span>
              <span className="logoDot" aria-hidden="true">.</span>
            </div>
          </Link>

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
      </header>

      {/* モバイルナビゲーションメニュー
          header は transform / backdrop-filter で fixed の基準になってしまうため、外側に置く */}
      <div id="mobileMenu" className={`mobileMenu ${isOpen ? 'open' : ''}`}>
        <nav className="mobileNav">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`mobileNavLink ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
