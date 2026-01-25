import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url:
    process.env.UPSTASH_REDIS_REST_URL ||
    "https://saved-grubworm-11306.upstash.io",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

// Passcode đơn giản - trong production nên dùng env variable
const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "thaytung2026";

export async function POST(request: NextRequest) {
  try {
    const { passcode, siteData } = await request.json();

    // Verify passcode
    if (passcode !== ADMIN_PASSCODE) {
      return NextResponse.json(
        { success: false, error: "Passcode không đúng" },
        { status: 401 },
      );
    }

    // Validate siteData
    if (!siteData || typeof siteData !== "object") {
      return NextResponse.json(
        { success: false, error: "Dữ liệu không hợp lệ" },
        { status: 400 },
      );
    }

    // Update to Redis using JSON.SET
    await redis.json.set("siteData", "$", siteData);

    return NextResponse.json({
      success: true,
      message: "Cập nhật thành công!",
    });
  } catch (error) {
    console.error("Error updating site data:", error);
    return NextResponse.json(
      { success: false, error: "Lỗi server, vui lòng thử lại" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const passcode = searchParams.get("passcode");

    // Verify passcode
    if (passcode !== ADMIN_PASSCODE) {
      return NextResponse.json(
        { success: false, error: "Passcode không đúng" },
        { status: 401 },
      );
    }

    // Get data from Redis
    const siteData = await redis.json.get("siteData");

    return NextResponse.json({
      success: true,
      data: siteData,
    });
  } catch (error) {
    console.error("Error fetching site data:", error);
    return NextResponse.json(
      { success: false, error: "Lỗi server" },
      { status: 500 },
    );
  }
}
