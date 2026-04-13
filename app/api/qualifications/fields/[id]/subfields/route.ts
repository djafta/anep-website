import { NextRequest, NextResponse } from "next/server";
import { validate } from "@/lib/validate";
import { createFieldSchema, createSubfield, listSubfields } from "@/services/subfield.service";

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const body = await request.json();
  const result = validate(createFieldSchema, body);

  if (!result.success) return result.response;

  try {
    const subfield = await createSubfield(result.data, (await params).id);
    return NextResponse.json(subfield);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 404 });
  }
}

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const subfields = await listSubfields((await params).id);
    return NextResponse.json(subfields);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 404 });
  }
}