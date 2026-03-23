import { type NextRequest, NextResponse } from "next/server";
import { searchDuas } from "@/lib/duas";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  // Rate limit: 30 searches per IP per minute
  const ip = getClientIp(request.headers);
  const rl = rateLimit(`search:${ip}`, 30, 60 * 1000);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim();

    if (!query) {
      return NextResponse.json({ duas: [], total: 0, query: "" });
    }

    if (query.length < 2) {
      return NextResponse.json(
        { error: "Query must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (query.length > 150) {
      return NextResponse.json(
        { error: "Query too long. Please use fewer than 150 characters." },
        { status: 400 }
      );
    }

    const result = await searchDuas(query);
    return NextResponse.json(result, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
