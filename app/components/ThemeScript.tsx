import { THEME_KEY } from '../lib/theme';

// 描画前に html[data-theme] を決めてちらつきを防ぐ。保存済みの選択を優先し、未選択なら OS の設定に合わせる
const script = `try{var t=localStorage.getItem('${THEME_KEY}');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}`;

// <head> 内に置く
export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
