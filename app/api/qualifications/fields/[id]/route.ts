import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import { validate } from "@/lib/validate";
import { findField } from "@/services/field.service";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: publicId } = await params;

  try {
    return NextResponse.json(await findField(publicId));
  } catch (err) {
    return NextResponse.json({ error: "FIELD_NOT_FOUND" }, { status: 404 });
  }

}

const baseSchema = z.object({
  publicId: z.string().optional(),
  name: z.string({ message: "INVALID_NAME" }),
  code: z.string({ message: "INVALID_CODE" }),
  icon: z.string().optional(),
  description: z.string().optional(),
  sortOrder: z.number().optional(),
});

const patchSchema = baseSchema.partial();

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: publicId } = await params;
  const body = await request.json();

  const result = validate(patchSchema, body);

  if (!result.success) {
    return result.response;
  }

  try {
    const updatedField = await prisma.field.update({
      where: { publicId },
      data: result.data,
      select: {
        publicId: true,
        name: true,
        code: true,
        icon: true,
        description: true,
        sortOrder: true,
      },
    });

    return NextResponse.json(updatedField);
  } catch {
    return NextResponse.json(
      { error: "FIELD_NOT_FOUND" },
      { status: 404 },
    );
  }
}