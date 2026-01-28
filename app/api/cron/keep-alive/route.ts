import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Ping Redis by updating lastUpdatedAt
    const now = new Date().toISOString();
    await redis.set("lastUpdatedAt", now);

    // Optional: Also read siteData to keep it warm
    await redis.get("siteData");

    return NextResponse.json({
      success: true,
      message: "Upstash Redis pinged successfully",
      timestamp: now,
    });
  } catch (error) {
    console.error("Cron job error:", error);
    return NextResponse.json(
      { error: "Failed to ping Upstash Redis" },
      { status: 500 },
    );
  }
}
