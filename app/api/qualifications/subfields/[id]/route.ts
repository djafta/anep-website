import { NextRequest, NextResponse } from "next/server";
import { findSubfield } from "@/services/subfield.service";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  const { id } = await params

  try {
    const subfield = await findSubfield(id);
    return NextResponse.json(subfield);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 404 });
  }
}