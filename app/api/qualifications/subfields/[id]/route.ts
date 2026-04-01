import { NextRequest, NextResponse } from "next/server";
import { findSubfield, removeSubfield } from "@/services/subfield.service";
import { z } from "zod";
import { validate } from "@/lib/validate";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  const { id } = await params

  try {
    const subfield = await findSubfield(id);
    return NextResponse.json(subfield);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 404 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  const { id } = await params

  try {
    await removeSubfield(id);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

const baseSchema = z.object({
  publicId: z.string().optional(),
  fieldPublicId: z.string().optional(),
  name: z.string({ message: "INVALID_NAME" }),
  code: z.string({ message: "INVALID_CODE" }),
  description: z.string().optional(),
  sortOrder: z.number().optional(),
});

const patchSchema = baseSchema.partial();

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  const { id: publicId } = await params;
  const body = await request.json();

  const result = validate(patchSchema, body);

  if (!result.success) {
    return result.response;
  }

  try {
    const updatedField = await prisma.subfield.update({
      where: { publicId },
      data: {
        name: result.data.name,
        code: result.data.code,
        description: result.data.description,
        sortOrder: result.data.sortOrder,
        field: {
          connect: {
            publicId: result.data.fieldPublicId
          }
        }
      },
      select: {
        publicId: true,
        name: true,
        code: true,
        description: true,
        sortOrder: true,
      },
    });

    return NextResponse.json(updatedField);
  } catch {
    return NextResponse.json(
      { error: "SUBFIELD_NOT_FOUND" },
      { status: 404 },
    );
  }

}
