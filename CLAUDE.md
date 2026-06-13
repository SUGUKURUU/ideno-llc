# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

合同会社出野（ideno LLC）のコーポレートサイト。以下3つのサービスを展開：
- **SNS運用代行**：経営者・企業向けSNS運用代行（メインサービス、トップページで紹介）
- **ホームページ制作**：企業向けWebサイト制作（`/services/website`）
- **社長の一日**：経営者密着ドキュメンタリー動画（`/services/shacho-no-ichinichi`）

## コマンド

```bash
npm run dev      # 開発サーバー起動（localhost:3000）
npm run build    # 本番ビルド
npm run lint     # ESLint
```

デモHTML確認（YouTubeやフォームをローカルでテストする場合）：
```bash
python3 -m http.server 8000  # file:// では YouTube が再生されないため必須
```

## アーキテクチャ

**Next.js 15 App Router** + TypeScript + Tailwind CSS + Framer Motion

### ページ構成

| URL | ファイル | 内容 |
|-----|----------|------|
| `/` | `app/page.tsx` | SNS運用代行LP（メインページ） |
| `/services` | `app/services/page.tsx` | サービス一覧 |
| `/services/website` | `app/services/website/` | ホームページ制作LP |
| `/services/shacho-no-ichinichi` | `app/services/shacho-no-ichinichi/` | 社長の一日LP |
| `/privacy` | `app/privacy/page.tsx` | プライバシーポリシー |
| `/tokutei` | `app/tokutei/page.tsx` | 特定商取引法表記 |

### コンポーネント構成

- `components/` — トップページ用セクション（Hero, About, Pricing, Contact など）
- `components/services/` — `/services` ページ用
- `components/shacho/` — 社長の一日ページ用（`ShachoContent.tsx` に動画IDを管理）
- `components/website/` — ホームページ制作ページ用

### お問い合わせフォーム（GAS連携）

`components/Contact.tsx` がフォームを担当。送信先は Google Apps Script Web App。

- 環境変数 `NEXT_PUBLIC_GAS_URL` に GAS の `/exec` URLを設定
- **重要**: `mode: "no-cors"` は使わない（GAS が `e.postData` を受け取れなくなる）
- `Content-Type: text/plain;charset=utf-8` で送信（GAS側の制約）
- CORS エラーは `.catch(() => {})` で握り潰す設計（GAS側は正常処理済み）
- GAS のセットアップ詳細は `GAS_SETUP.md` を参照

### 環境変数

`.env.local` に設定（Vercel の Environment Variables にも同様に設定が必要）：
```
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/s/[DEPLOYMENT_ID]/exec
```

### デプロイ

Vercel（本番: https://ideno-llc.vercel.app/）に自動デプロイ。`main` ブランチへのプッシュで反映。

### デモファイル

`demo.html`, `demo-shacho.html`, `demo-services.html`, `demo-website.html` はスタンドアロンHTMLのデモ。実装確認やクライアントへの提案用。YouTube埋め込みは `file://` 非対応のためローカルサーバー経由で開くこと。

### リダイレクト

`next.config.ts` で定義：
- `/website` → `/services/website`（永続リダイレクト）
- `/services/sns` → `/`（SNSはトップページが兼務）
