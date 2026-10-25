import { ViewTransition } from 'react';
import ScrollReveal from './components/ScrollReveal';

// template はページを移動するたびに作り直されるため、移動のたびに
// 前のページの exit と次のページの enter のアニメーションが再生される（スタイルは globals.css の Page Transition）
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="pageEnter" exit="pageExit" default="none">
      <div className="pageTransition">
        {children}
        <ScrollReveal />
      </div>
    </ViewTransition>
  );
}
