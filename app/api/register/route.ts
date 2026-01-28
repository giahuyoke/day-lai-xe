import { NextRequest, NextResponse } from "next/server";

interface EmailResponse {
  data: { id: string } | null;
  error: { message: string } | null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, mobile, type, note } = body;

    // Validate required fields
    if (!name || !mobile || !type) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ thông tin bắt buộc" },
        { status: 400 },
      );
    }

    // Format current date/time in Vietnam timezone
    const now = new Date();
    const formattedDate = now.toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Ho_Chi_Minh",
    });

    // Prepare template variables
    const templateVariables = {
      name: name,
      type: type,
      date: formattedDate,
      note: note || "Không có ghi chú",
      mobile: mobile,
    };

    // Send email using Resend API with template
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from:
          process.env.RESEND_FROM_EMAIL || "notification@letungdaotaolaixe.com",
        to: [process.env.ADMIN_EMAIL || "letungdaotaolaixe@gmail.com"],
        template: {
          id: "form-lai-xe",
          variables: templateVariables,
        },
      }),
    });

    const result: EmailResponse = await response.json();

    if (!response.ok || result.error) {
      console.error("Resend error:", result);
      return NextResponse.json(
        { error: "Không thể gửi email. Vui lòng thử lại sau." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.",
      emailId: result.data?.id,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Đã xảy ra lỗi. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }
}
