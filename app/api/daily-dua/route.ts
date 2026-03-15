import { NextResponse } from "next/server";
import { getDailyDua } from "@/lib/duas";

export const runtime = "nodejs";

export async function GET() {
  try {
    const dua = await getDailyDua();
    return NextResponse.json(dua, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
