import { NextResponse } from "next/server";
import {
  findQualification,
  removeQualification,
  updateQualification,
  updateQualificationSchema
} from "@/services/qualification.service";
import { validate } from "@/lib/validate";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: publicId } = await params;

  try {
    return NextResponse.json(await findQualification(publicId));
  } catch (err) {
    return NextResponse.json({ error: "QUALIFICATION_NOT_FOUND" }, { status: 404 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: publicId } = await params;

  await removeQualification(publicId)

  return new NextResponse(null, {
    status: 204
  })
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id: publicId } = await params;
  const formData = await request.formData();

  const file = formData.get("file") as File | null;

  const body = {
    publicId,
    name: formData.get("name"),
    code: formData.get("code"),
    title: formData.get("title"),
    level: formData.get("level") ? Number(formData.get("level")) : undefined,
    certificate: formData.get("certificate") ?? undefined,
    description: formData.get("description") ?? undefined,
    subfieldPublicId: formData.get("subfieldPublicId"),
    sortOrder: formData.get("sortOrder") ? Number(formData.get("sortOrder")) : undefined,
  };

  console.log({
    body
  })

  const result = validate(updateQualificationSchema, body);

  if (!result.success) {
    return result.response;
  }

  try {
    const qualification = await updateQualification(result.data, file);

    return NextResponse.json(qualification, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}