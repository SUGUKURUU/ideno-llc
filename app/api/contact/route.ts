import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// メール設定
const EMAIL_USER = process.env.EMAIL_USER || 'inquiry@ideno-llc.jp';
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'inquiry@ideno-llc.jp';

interface ContactData {
  company: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();

    // バリデーション
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: 'お名前とメールアドレスは必須です' },
        { status: 400 }
      );
    }

    // メールアドレスのバリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      );
    }

    // GAS への送信（バックアップ）
    const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL;
    if (GAS_URL) {
      try {
        await fetch(GAS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...data,
          }),
        });
        console.log('✓ GAS に送信成功');
      } catch (gasError) {
        console.log('⚠️ GAS への送信に失敗（バックアップなし）:', gasError);
      }
    }

    // メール送信（プライマリ）
    if (EMAIL_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASSWORD,
        },
      });

      // 受信メール
      const adminMailOptions = {
        from: EMAIL_USER,
        to: RECIPIENT_EMAIL,
        subject: `【お問い合わせ】${data.name}様からの無料相談申し込み`,
        html: `
          <h2>お問い合わせがありました</h2>
          <p>以下の内容をご確認ください。</p>

          <h3>【送信日時】</h3>
          <p>${new Date().toLocaleString('ja-JP')}</p>

          <h3>【会社名】</h3>
          <p>${data.company || '（記入なし）'}</p>

          <h3>【お名前】</h3>
          <p>${data.name}</p>

          <h3>【メールアドレス】</h3>
          <p>${data.email}</p>

          <h3>【電話番号】</h3>
          <p>${data.phone || '（記入なし）'}</p>

          <h3>【ご興味のあるプラン】</h3>
          <p>${data.plan || '（記入なし）'}</p>

          <h3>【お問い合わせ内容】</h3>
          <p>${data.message ? data.message.replace(/\n/g, '<br>') : '（記入なし）'}</p>

          <hr>
          <p>このメールは自動送信です。</p>
        `,
      };

      // ユーザーへの確認メール
      const userMailOptions = {
        from: EMAIL_USER,
        to: data.email,
        subject: 'お問い合わせありがとうございます | 株式会社エグゼクティブサポート',
        html: `
          <h2>${data.name}様へ</h2>
          <p>いつもお世話になっております。</p>
          <p>この度は、SNS運用代行サービスへのお問い合わせをいただき、ありがとうございます。</p>

          <p>お送りいただいたお問い合わせ内容を確認し、<strong>2営業日以内にご返信いたします</strong>。</p>

          <p>ご質問やご不明な点がございましたら、いつでもお気軽にお声がけください。</p>

          <hr>
          <h3>【送信内容】</h3>
          <p><strong>お名前：</strong>${data.name}</p>
          <p><strong>会社名：</strong>${data.company || '（記入なし）'}</p>
          <p><strong>メールアドレス：</strong>${data.email}</p>
          <p><strong>電話番号：</strong>${data.phone || '（記入なし）'}</p>
          <p><strong>ご興味のあるプラン：</strong>${data.plan || '（記入なし）'}</p>
          <p><strong>お問い合わせ内容：</strong></p>
          <p>${data.message ? data.message.replace(/\n/g, '<br>') : '（記入なし）'}</p>

          <hr>
          <p>株式会社エグゼクティブサポート<br>
          SNS運用代行事業部</p>
        `,
      };

      try {
        await transporter.sendMail(adminMailOptions);
        console.log('✓ 管理者メール送信成功');
      } catch (adminMailError) {
        console.error('✗ 管理者メール送信失敗:', adminMailError);
      }

      try {
        await transporter.sendMail(userMailOptions);
        console.log('✓ ユーザーメール送信成功');
      } catch (userMailError) {
        console.error('✗ ユーザーメール送信失敗:', userMailError);
      }
    } else {
      console.warn('⚠️ EMAIL_PASSWORD が設定されていません');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'お問い合わせを受け付けました。2営業日以内にご返信いたします。'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { error: 'お問い合わせの送信に失敗しました。もう一度お試しください。' },
      { status: 500 }
    );
  }
}
