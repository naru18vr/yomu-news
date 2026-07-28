# 読むニュース

中学生が毎日、ニュースを短く読み、エッセイや短い物語も楽しめる静的サイトです。サイトの説明文は「今日の重大ニュースを、エッセイと物語で読む。」です。

> 初期コンテンツは表示確認用の架空記事です。公開前に、確認済みの事実と正しい出典へ差し替えてください。

## できること

- 朝刊・夕刊を分けた最新記事表示
- Markdown からの記事詳細ページ生成
- 日付別ページと月表示カレンダー
- 年月別アーカイブ
- ジャンル別の記事一覧と記事数表示
- キーワード・ジャンル・読み物の種類・朝夕・期間を組み合わせる検索
- RSS、sitemap、OGP、favicon、ダークモード、文字サイズ切り替え
- GitHub Actions を使った GitHub Pages への自動デプロイ

## ローカル起動

Node.js 22 以降を用意して、次を実行します。

```bash
npm install
npm run dev
```

ビルド確認は次のとおりです。

```bash
npm run build
npm run preview
```

## 記事の追加方法

1. `src/content/news/` に Markdown ファイルを追加します。ファイル名は `YYYY-MM-DD-morning.md` または `YYYY-MM-DD-evening.md` にします。
2. Front Matter に必須項目を入力します。
3. ニュース要約・読み物・出典を確認します。
4. `npm run build` が成功することを確認します。
5. `main` ブランチに反映すると、GitHub Actions がサイトを自動公開します。

### Front Matter

```yaml
---
title: "2026年7月29日 朝刊"
date: "2026-07-29T07:00:00+09:00"
day: "2026-07-29"
edition: "morning" # morning または evening
description: "ニュース超要約の冒頭。"
topics:
  - 国際
  - 経済
topicSlugs:
  - international
  - economy
contentTypes:
  - essay # essay / short-short / flash-fiction / dialogue / observation
readingTitles:
  - "読み物のタイトル"
keywords:
  - 検索用の補助語
readingTime: 4
featured: false
sources:
  - publisher: "公式機関名または媒体名"
    title: "発表名または記事名"
    url: "https://example.com/source"
    publishedAt: "2026-07-29"
---
```

`topics` と `topicSlugs` は同じ順序・同じ数で指定してください。利用できる slug は `src/lib/taxonomy.ts` に定義されています。

### 本文テンプレート

朝刊：

```md
## ニュース超要約

120〜180字程度の、確認できた事実だけによる要約。

## 今日の読み物

### 作品タイトル

エッセイ、ショートショートなど。
```

夕刊：

```md
## 朝から何が変わった？

100〜180字程度の続報。

## 今日の一筆

### 作品タイトル

250〜450字程度の短い読み物。
```

出典は Front Matter の `sources` に入力すると、記事末尾へ媒体名・記事名・公開日つきのリンクとして自動表示されます。

## ディレクトリ構成

```text
src/
  components/       # 記事カード、カレンダー、ナビゲーション
  content/news/     # 記事 Markdown
  layouts/          # 共通・記事レイアウト
  lib/              # 日付、ジャンル、URL の共通処理
  pages/            # 静的ページと動的ルート
  styles/           # モバイル優先のスタイル
.github/workflows/  # GitHub Pages デプロイ
```

## GitHub Pages の公開

このリポジトリでは `.github/workflows/deploy.yml` が `main` への push ごとに動きます。

リポジトリ名を変更・forkする場合は、`astro.config.mjs` の `base` と `src/lib/paths.ts` の `basePath` を新しいリポジトリ名に合わせて変更してください。

初回だけ、GitHub のリポジトリ画面で **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定してください。以後は `main` に記事を追加するだけで、ビルド後に公開されます。

公開 URL は次の形式です。

```text
https://naru18vr.github.io/yomu-news/
```

## 出典と文章制作のルール

- ニュース要約には、確認できた事実だけを書く。日時・人物・数字・発言を変更しない。
- 複数の信頼できる情報源で確認し、できる限り公式発表など一次情報を含める。
- 実在人物に架空の発言をさせない。創作の人物・町・会社などは現実と混同されないようにする。
- 戦争、災害、事件、死傷者を笑いの対象にしない。
- 特定の実在作家の文体・固有表現を直接模倣しない。
- 出典はリンク切れを想定し、媒体名・記事名・公開日を必ず保持する。
