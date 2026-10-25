'use client';

import { useEffect } from 'react';

// 同時に画面へ入った要素どうしの表示をずらす間隔
const STAGGER_MS = 80;

// .reveal を付けた要素が画面に入ったら .isVisible を付けてフェードインさせる。
// app/template.tsx に置き、ページを移動するたびに新しいページの要素を監視し直す
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        visible.forEach((entry, idx) => {
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${idx * STAGGER_MS}ms`;
          el.classList.add('isVisible');
          observer.unobserve(el);
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal:not(.isVisible)').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
