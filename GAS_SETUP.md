# Google Sheets + Google Apps Script セットアップガイド

お問い合わせフォームの送信内容をGoogle Sheetsに自動記録し、メール通知を送るセットアップです。

## 手順 1：Google Sheets を作成

1. [Google Sheets](https://sheets.google.com) にアクセス
2. 新しいスプレッドシートを作成し、名前を「ideno_contacts」とします
3. 以下のヘッダーを1行目に追加：

```
timestamp | company | name | email | phone | plan | message
```

例：
```
A1: timestamp
B1: company
C1: name
D1: email
E1: phone
F1: plan
G1: message
```

## 手順 2：Google Apps Script を設定

1. Sheetsを開いた状態で、**拡張機能** → **Apps Script** をクリック
2. エディタで以下のコードを貼り付け（既存コードは削除）：

```javascript
// シートIDとメール設定
const SHEET_ID = "YOUR_SHEET_ID_HERE"; // スプレッドシートのURLから取得
const RECIPIENT_EMAIL = "info@ideno-llc.jp"; // 受信メールアドレス
const SHEET_NAME = "フォーム送信";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // スプレッドシートにデータを追加
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sheet.appendRow([
      data.timestamp,
      data.company,
      data.name,
      data.email,
      data.phone,
      data.plan,
      data.message,
    ]);
    
    // メール通知を送信
    sendNotificationEmail(data);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log("Error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendNotificationEmail(data) {
  const subject = `【お問い合わせ】${data.name}様からの無料相談申し込み`;
  
  const body = `
お問い合わせがありました。以下の内容をご確認ください。

【送信日時】
${new Date(data.timestamp).toLocaleString('ja-JP')}

【会社名】
${data.company}

【お名前】
${data.name}

【メールアドレス】
${data.email}

【電話番号】
${data.phone}

【ご興味のあるプラン】
${data.plan}

【お問い合わせ内容】
${data.message}

---
このメールは自動送信です。
  `.trim();
  
  MailApp.sendEmail(RECIPIENT_EMAIL, subject, body);
}

// テスト用（ローカルで動作確認するときのみ）
function testDoPost() {
  const testData = {
    timestamp: new Date().toISOString(),
    company: "テスト会社",
    name: "テスト太郎",
    email: "test@example.com",
    phone: "090-1234-5678",
    plan: "sns-premium",
    message: "テストメッセージです。",
  };
  
  doPost({ postData: { contents: JSON.stringify(testData) } });
}
```

## 手順 3：Apps Script をデプロイ

1. コード編集画面で **「デプロイ」** をクリック
2. **「新しいデプロイ」** → **種類を選択** で **「ウェブアプリ」** を選択
3. 以下の設定：
   - **実行者：** 自分のアカウント
   - **アクセスできるユーザー：** 全員

4. **デプロイ** をクリック
5. 表示される **Web App URL** をコピー（以下の形式）：
   ```
   https://script.google.com/macros/d/{DEPLOYMENT_ID}/userweb
   ```

## 手順 4：SHEET_ID を取得

1. Google Sheetsのスプレッドシートを開く
2. URLから SHEET_ID を取得：
   ```
   https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit#gid=0
   ```
   `{SHEET_ID}` の部分をコピー

3. Apps Script の `SHEET_ID = "YOUR_SHEET_ID_HERE"` を、コピーしたIDに置き換え
4. **保存** をクリック

## 手順 5：シート名を確認

1. スプレッドシート下部のシート名が「フォーム送信」になっているか確認
2. 違う場合は、`SHEET_NAME = "フォーム送信"` の部分を実際のシート名に変更

## 手順 6：プロジェクトの環境変数を設定

プロジェクトの `.env.local` ファイルに以下を追加：

```env
NEXT_PUBLIC_GAS_URL=https://script.google.com/macros/d/{DEPLOYMENT_ID}/userweb
```

（`{DEPLOYMENT_ID}` は手順3でコピーしたWeb App URLから抽出）

## 手順 7：テスト

### ローカルテスト（GAS側）
1. Apps Script エディタで **実行** → **testDoPost** をクリック
2. ログを確認して、エラーがないか確認
3. Sheets にデータが記録されているか確認
4. メールが受信されたか確認

### Webサイトでテスト
1. サイトで **Contact フォーム** を入力して送信
2. スプレッドシートにデータが記録されているか確認
3. メールが受信されているか確認

## トラブルシューティング

### Sheets に記録されない
- SHEET_ID が正しいか確認
- シート名が「フォーム送信」と一致しているか確認
- GAS のログで エラーメッセージを確認

### メールが届かない
- メール配信者のアドレス（`RECIPIENT_EMAIL`）が正しいか確認
- GAS の実行権限が正しいか確認
- ログで エラーメッセージを確認

### Web App URL が無効
- デプロイし直す（新しいデプロイを作成）
- `NEXT_PUBLIC_GAS_URL` に正しいURLが設定されているか確認

## セキュリティに関する注意

- GAS Web App は **「全員がアクセス可」** に設定しています
- 本番環境では、IP制限やAPI キーの検証を追加することをお勧めします
