'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
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
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* モバイルナビゲーションメニュー */}
        <div className={`mobileMenu ${isOpen ? 'open' : ''}`}>
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
      </div>
    </header>
  );
}
