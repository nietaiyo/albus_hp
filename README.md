# Albus. 公式サイト

**大学祭の運営に、新しいあたりまえを。**

大学祭実行委員会の出身者によるチーム Albus.（アルバス）の公式サイトです。

- 本番: https://albus-tech.org
- ホスティング: Vercel

## 技術構成

- Next.js 16（App Router）/ React 19 / TypeScript
- スタイル: `app/globals.css`（CSS 変数によるライト／ダークのテーマ管理）
- フォント: `next/font` の Geist（和文は OS 標準のゴシック）
- お問い合わせ: Resend（メール送信）＋ Discord Webhook（通知）

> このリポジトリの Next.js は、学習データにある以前のバージョンと API が異なる場合があります。コードを書く前に `node_modules/next/dist/docs/` の該当ガイドを確認してください（[AGENTS.md](AGENTS.md)）。

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 本番ビルド
npm run start   # ビルド結果を起動
npm run lint
```

## 環境変数

ローカルでは `.env.local`、本番・プレビューでは Vercel の環境変数に設定します。

| 変数 | 必須 | 用途 |
| --- | --- | --- |
| `RESEND_API_KEY` | お問い合わせを使う場合 | Resend の API キー |
| `CONTACT_TO_EMAIL` | お問い合わせを使う場合 | 問い合わせの受信先アドレス |
| `CONTACT_FROM_EMAIL` | 任意 | 送信元（例: `Albus. <contact@albus-tech.org>`）。未設定時は `onboarding@resend.dev` から送るため、Resend アカウントのアドレス宛てにしか届かない |
| `DISCORD_WEBHOOK_URL` | 任意 | 問い合わせ受信時に Discord へ通知する Webhook |
| `NEXT_PUBLIC_SITE_URL` | 任意 | サイトの URL（既定: `https://albus-tech.org`）。canonical・sitemap・OGP の基準 |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | 任意 | Search Console の HTML タグ認証用。現在は DNS（TXT レコード）で認証済みのため不要 |

## ディレクトリ構成

```
app/
  layout.tsx            共通レイアウト・サイト全体のメタ情報・構造化データ（JSON-LD）
  page.tsx              トップ（中身は components/HomeContent.tsx）
  about/                私たちについて（チームの想い・メンバー）
  projects/             プロジェクト一覧（タイル形式）
  news/                 活動報告
  contact/              お問い合わせ（page はクライアントコンポーネントのため、メタ情報は layout.tsx）
  not-found.tsx         存在しない URL のときの 404 ページ（検索結果には載らない）
  api/send-email/       お問い合わせの送信 API（Resend → Discord 通知）
  sitemap.ts, robots.ts sitemap.xml / robots.txt の生成
  lib/site.ts           サイト名・URL・タイトル・説明文・OGP 画像・ページ一覧と、ページごとのメタ情報を作る pageMetadata()
  lib/theme.ts          テーマ（ライト／ダーク）の型と保存キー
  components/           ヘッダー・フッター・テーマ切り替え・トップの演出など
  globals.css           全スタイル。冒頭の Theme Tokens でライト／ダークの色を定義
public/
  favicon.png           ファビコン（タブ・ホーム画面のアイコン）
  Albus-OGP.png         SNS・検索結果で共有されるときの画像
```

## 文章を更新するとき

- **キャッチコピー**: メインは「大学祭の運営に、新しいあたりまえを。」、サブは「テクノロジーで、もっと便利に、もっと自由に。」。表現の方針は [CLAUDE.md](CLAUDE.md) の「文章・ブランド表現」を参照してください。
- **お知らせの追加**: `app/news/page.tsx` の `newsList` の先頭に追加します。カテゴリは `Update` / `Activity` / `Release`（バッジ色は `categoryClass`）。
- **プロジェクトの追加**: `app/projects/page.tsx` の `projects` の先頭に追加します。状態は `live`（運用中）/ `building`（開発中）。
- **検索結果・SNS に出る文章**: サイト全体のタイトル・説明文は `app/lib/site.ts`、ページごとの説明文は各ページの `pageMetadata()` で設定します。
- **ページを増やしたとき**: `app/lib/site.ts` の `PAGES` に追加すると sitemap.xml に載ります。

## ダークモード

ヘッダー右上のトグルでライト／ダークを切り替えます（未選択時は OS の設定に従う）。UI を追加・変更するときは、必ず両方のテーマに対応させてください。ルールは [CLAUDE.md](CLAUDE.md) の「ダークモード対応」にまとめています。

## SEO

- 各ページに title / description / canonical / OGP を設定（`app/lib/site.ts` の `pageMetadata()`）
- `sitemap.xml` と `robots.txt` を自動生成
- 構造化データ（WebSite / Organization）を `app/layout.tsx` で出力
- Google Search Console はドメインプロパティ（`albus-tech.org`、DNS 認証）で登録済み。DNS は Cloudflare で管理

## 臨時対応中のもの

- **お問い合わせフォーム**: メールの受信先設定が整うまで、フォームを隠して yuiki.dev の「Contact」へ案内しています。元に戻すときは `臨時対応(yuiki.dev誘導)` で検索し、該当箇所（`app/components/TemporaryContactNotice.tsx`、`app/contact/page.tsx` の定数と分岐、`app/globals.css` のブロック）を削除してください。

## デザインと演出

- **フローティングヘッダー**: 画面上部から少し離した角丸のヘッダー。半透明のガラス風で、背後のコンテンツが透けます。最大幅 1600px。
- **ファーストビュー**: トップのヒーローセクションが画面の高さいっぱいに広がります。
- **テキストスクランブル**: トップの見出し「大学祭の運営に、新しいあたりまえを。」が、ランダムな文字から順に確定していく演出で表示されます。初回はイントロの後に、2回目以降は即座に再生されます。
- **イントロ**: セッションの初回アクセス時に、中央に「Albus.」のロゴがフェードイン・ズームします（背景はテーマに合わせて白／濃紺）。
- **グリッド背景**: ページ全体にうっすらとした格子模様を敷いています。
- **スポットライトとグリッドハイライト**: マウスに合わせて背景に淡い光が追従し、通過したマス（40px 四方）が最大 5 マスまで、新しいものほど濃く光ります。
- **コードコンソール**: ヒーローの右側で、Albus. を表す擬似コードがタイピングされ、最後にキャッチコピーを出力します。1 カラム表示（幅 820px 以下）では本文の邪魔にならないよう表示しません。
- **ホバー効果**: ボタンにマウスを乗せると、浮き上がりながら青く光ります。
- **スクロール時のフェードイン**: トップの「Our Approach」とお問い合わせの帯が、画面に入ったときにノイズを伴って浮かび上がります。
- **動きを減らす設定**: OS で「視差効果を減らす」を有効にしている場合、イントロ・スクランブル・タイピング・フェードインの動きを抑えます。
- **レスポンシブ**: 幅 820px 以下で 1 カラムに切り替わり、ボタンは画面幅に合わせて広がります。幅 768px 以下ではヘッダーがハンバーガーメニューになり、フッターのリンクは 2 列に並びます。見出しの文字サイズは画面幅に合わせて伸縮します。
