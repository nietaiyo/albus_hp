This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## デザインカスタマイズ
- **フローティングヘッダー**: 画面上部から少し離し、角を丸くして浮遊感を持たせたモダンなデザイン（kohaku-toyama.comを参考）に変更しています。グラスモーフィズム（ガラス質感）を適用し、背後のコンテンツが美しく透けるようになっています。最大幅を `1600px`（幅92%基準）に拡張してワイド画面に最適化しました。
- **全画面ファーストビュー（ヒーローセクション）**: 最初にページを開いた状態（スクロール前）で、ヒーローセクション（「大学祭はテクノロジーで進化する」の部分）が画面全体（100vh基準）に広がり、最大幅 `1600px` にてダイナミックに表示されるようにレイアウトを最適化しました。スクロールするまで次の「Greeting」セクションは見えません。
- **デコード（テキストスクランブル）エフェクト**: ヒーローセクションの見出し「大学祭はテクノロジーで進化する」にデコード演出を実装しました。最初は何も表示されず、ランダムな記号が高速に入れ替わりながら徐々に正しい文字へ確定していく近未来的なエフェクトです。初回訪問時はスプラッシュ画面の終了後に順次（時間差で）再生され、2回目以降は即座に再生されます。
- **イントロ・スプラッシュアニメーション**: サイト初回アクセス時（セッション単位）に、画面全体が白背景になり、中央に「Albus.」のロゴがNetflix風にジワッとフェードイン＆緩やかにズームインしながら現れる演出を実装しています。
- **サイバー・グリッド背景**: ページ全体の背景に、うっすらとしたデジタルの格子模様（グリッド線）を適用し、デジタルな雰囲気を強めました。
- **インタラクティブ・スポットライト**: マウスカーソルの動きに同期して、背景にふわっとした青い光が追従し、浮遊感のあるヘッダーやカードを背面から美しく透過させます。
- **プログラム自動タイピングコンソール**: ヒーローセクションの右側に、チームAlbusの擬似コードがコンソール上にカタカタとタイピングされて最終メッセージを表示する、エンジニアリングチームらしいアニメーションパネルを実装しました。
- **Glow Hover Effects**: 主要なボタンやコンテンツカードにマウスをホバーした際、境界線が青くネオンのように美しく発光（Glow）しつつ立体的に浮き上がるエフェクトを追加しました。また、ヒーローセクションの「制作物を見る」と「チームについて」ボタンは初期状態で同じ色（白背景に青枠）になり、マウスホバー時にどちらも鮮やかなプライマリカラー（青背景に白文字）に変化するよう統一デザインに調整しました。
- **ホログラムノイズフェードイン**: 各セクション（Greeting、How to use、Contact）がスクロールによって画面に入ってくる際、一瞬だけデジタルホログラムが起動するようなノイズと揺らぎを伴いながら浮かび上がるフェードインを実装しました。

