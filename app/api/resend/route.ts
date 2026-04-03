import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { username, email, subject, message } = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.MAIN_RECEIVE_ADDRESS!,
      subject: `【お問い合わせ】${username}様より`,
      html: `
        <p><strong>名前：</strong>${username}</p>
        <p><strong>メール：</strong>${email}</p>
        <p><strong>項目：</strong>${subject ?? "未入力"}</p>
        <p><strong>内容：</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }
}
