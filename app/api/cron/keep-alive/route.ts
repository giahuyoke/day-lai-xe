import { Redis } from "@upstash/redis";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const resend = new Resend(process.env.RESEND_API_KEY);

interface ServerStatus {
  service: string;
  status: "healthy" | "error";
  latency?: number;
  details?: string;
  error?: string;
}

async function checkUpstashStatus(): Promise<ServerStatus> {
  const start = Date.now();
  try {
    const now = new Date().toISOString();
    await redis.set("lastUpdatedAt", now);
    const lastUpdatedAt = await redis.get("lastUpdatedAt");

    // siteData is stored as JSON, use redis.json.get
    const siteData = await redis.json.get("siteData");

    const latency = Date.now() - start;

    return {
      service: "Upstash Redis",
      status: "healthy",
      latency,
      details: `
        - Đọc/Ghi: OK
        - Độ trễ: ${latency}ms
        - lastUpdatedAt: ${lastUpdatedAt || "N/A"}
        - siteData: ${siteData ? "Có dữ liệu" : "Không có dữ liệu"}
      `.trim(),
    };
  } catch (error) {
    return {
      service: "Upstash Redis",
      status: "error",
      latency: Date.now() - start,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

async function checkVercelStatus(): Promise<ServerStatus> {
  const start = Date.now();
  try {
    const response = await fetch("https://letungdaotaolaixe.com", {
      method: "HEAD",
    });
    const latency = Date.now() - start;

    return {
      service: "Vercel (Website)",
      status: response.ok ? "healthy" : "error",
      latency,
      details: `
        - HTTP Status: ${response.status}
        - Độ trễ: ${latency}ms
      `.trim(),
    };
  } catch (error) {
    return {
      service: "Vercel (Website)",
      status: "error",
      latency: Date.now() - start,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

function generateEmailHtml(
  statuses: ServerStatus[],
  reportTime: string,
): string {
  const overallStatus = statuses.every((s) => s.status === "healthy")
    ? "✅ TẤT CẢ DỊCH VỤ HOẠT ĐỘNG BÌNH THƯỜNG"
    : "⚠️ CÓ VẤN ĐỀ CẦN KIỂM TRA";

  const statusRows = statuses
    .map(
      (s) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eee;">
          <strong>${s.service}</strong>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #eee;">
          ${s.status === "healthy" ? "✅ Healthy" : "❌ Error"}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #eee;">
          ${s.latency ? `${s.latency}ms` : "N/A"}
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 8px 12px 16px; background: #f9f9f9; font-size: 13px;">
          ${s.status === "healthy" ? s.details?.replace(/\n/g, "<br>") : `<span style="color: red;">${s.error}</span>`}
        </td>
      </tr>
    `,
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Báo cáo Server hàng ngày</title>
    </head>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">📊 Báo cáo Server hàng ngày</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">Lái Xe Thầy Tùng</p>
      </div>
      
      <div style="background: white; padding: 30px; border: 1px solid #eee; border-top: none;">
        <div style="background: ${statuses.every((s) => s.status === "healthy") ? "#d4edda" : "#fff3cd"}; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <strong style="font-size: 16px;">${overallStatus}</strong>
        </div>
        
        <p style="color: #666; margin-bottom: 20px;">
          <strong>Thời gian báo cáo:</strong> ${reportTime}
        </p>
        
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f5f5f5;">
              <th style="padding: 12px; text-align: left;">Dịch vụ</th>
              <th style="padding: 12px; text-align: left;">Trạng thái</th>
              <th style="padding: 12px; text-align: left;">Độ trễ</th>
            </tr>
          </thead>
          <tbody>
            ${statusRows}
          </tbody>
        </table>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
        
        <p style="color: #999; font-size: 12px; text-align: center;">
          Email được gửi tự động từ hệ thống giám sát Lái Xe Thầy Tùng.<br>
          Không trả lời email này.
        </p>
      </div>
    </body>
    </html>
  `;
}

export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const reportTime = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      dateStyle: "full",
      timeStyle: "long",
    });

    // Check all services
    const [upstashStatus, vercelStatus] = await Promise.all([
      checkUpstashStatus(),
      checkVercelStatus(),
    ]);

    const statuses = [upstashStatus, vercelStatus];

    // Generate email content
    const emailHtml = generateEmailHtml(statuses, reportTime);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL || "notification@letungdaotaolaixe.com",
      to: "giahuyoke01@gmail.com",
      subject: `📊 Báo cáo Server - ${statuses.every((s) => s.status === "healthy") ? "✅ OK" : "⚠️ Cần kiểm tra"}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Failed to send email:", error);
      return NextResponse.json({
        success: true,
        message: "Server check completed but email failed",
        statuses,
        emailError: error,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Daily report sent successfully",
      emailId: data?.id,
      statuses,
    });
  } catch (error) {
    console.error("Cron job error:", error);
    return NextResponse.json(
      { error: "Failed to run daily check" },
      { status: 500 },
    );
  }
}
