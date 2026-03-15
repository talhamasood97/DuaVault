import { type NextRequest, NextResponse } from "next/server";
import { getAllDuas, getDuasByCategory, getDuasByEmotion } from "@/lib/duas";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const emotion = searchParams.get("emotion");
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.min(parseInt(limitParam, 10), 100) : undefined;

    let duas;
    if (category) {
      duas = await getDuasByCategory(category);
    } else if (emotion) {
      duas = await getDuasByEmotion(emotion);
    } else {
      duas = await getAllDuas();
    }

    if (limit) {
      duas = duas.slice(0, limit);
    }

    return NextResponse.json(
      { duas, total: duas.length },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
