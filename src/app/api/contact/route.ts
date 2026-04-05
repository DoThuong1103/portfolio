import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Vui lòng cung cấp đầy đủ thông tin" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend test domain
      to: process.env.SMTP_USER || 'dothuong2k1@gmail.com', // Must be the email you registered on Resend
      replyTo: email,
      subject: `[Portfolio Contact] ${subject} - Từ ${name}`,
      text: `Bạn nhận được một tin nhắn mới từ Contact Form:\n\n` +
            `Họ tên: ${name}\n` +
            `Email: ${email}\n\n` +
            `Tiêu đề: ${subject}\n\n` +
            `Nội dung:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #6c63ff;">Tin nhắn mới từ Portfolio!</h2>
          <p><strong>Người gửi:</strong> ${name}</p>
          <p><strong>Email liên hệ:</strong> ${email}</p>
          <p><strong>Tiêu đề:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #333;">Nội dung tin nhắn:</h3>
          <p style="white-space: pre-wrap; color: #555; line-height: 1.5;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Có lỗi xảy ra khi gửi email qua Resend.", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Gửi tin nhắn thành công!" }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Server API error:", error);
    return NextResponse.json(
      { error: "Lỗi hệ thống.", details: errorMessage },
      { status: 500 }
    );
  }
}
