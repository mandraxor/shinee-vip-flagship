import { NextResponse } from "next/server";
import { VIP_PORTAL_URL } from "@/data/shineeData";

export async function GET() {
  return NextResponse.redirect(VIP_PORTAL_URL, { status: 307 });
}
