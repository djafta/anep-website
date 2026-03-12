import { NextRequest, NextResponse } from "next/server";
import { v7 as uuid } from "uuid";
import { z } from "zod";
import { validate } from "@/lib/validate";
import { createField, findFieldBySubfield, listFields } from "@/services/field.service";

const schema = z.object({
  publicId: z.string().optional().default(() => uuid()),
  name: z.string({ message: 'INVALID_NAME' }),
  code: z.string({ message: 'INVALID_CODE' }),
  icon: z.string().optional(),
  description: z.string().optional(),
  sortOrder: z.number().optional().default(0),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const result = validate(schema, body);

  if (!result.success) {
    return result.response;
  }

  const field = createField(result.data);

  return Response.json(field);
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const subfieldPublicId = searchParams.get('subfieldPublicId') as string | undefined;
    if (subfieldPublicId) {
      return NextResponse.json(await findFieldBySubfield(subfieldPublicId));
    }
    return NextResponse.json(await listFields());
  } catch (error) {
    return NextResponse.json({ error: "FIELD_NOT_FOUND" }, { status: 404 });
  }

}