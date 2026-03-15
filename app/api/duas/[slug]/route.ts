import { type NextRequest, NextResponse } from "next/server";
import { getDuaBySlug } from "@/lib/duas";

export const runtime = "edge";

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const dua = await getDuaBySlug(params.slug);
    if (!dua) {
      return NextResponse.json({ error: "Dua not found" }, { status: 404 });
    }
    return NextResponse.json(dua, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
