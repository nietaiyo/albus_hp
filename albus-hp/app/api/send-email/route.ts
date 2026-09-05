import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, message } = body;

    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.CONTACT_TO_EMAIL!,
            subject: `【HP問い合わせ】`,
            html: `<p>名前: ${name}</p><p>Email: ${email}</p><p>内容: ${message}</p>`,
        })

        return NextResponse.json({ success: true, data});
    } catch (error) {
        return NextResponse.json({error}, {status: 500});
    }
}