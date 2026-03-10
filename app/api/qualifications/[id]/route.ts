import { NextResponse } from "next/server";
import { findQualification } from "@/services/qualification.service";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: publicId } = await params;

  try {
    return NextResponse.json(await findQualification(publicId));
  } catch (err) {
    return NextResponse.json({ error: "QUALIFICATION_NOT_FOUND" }, { status: 404 });
  }
}

