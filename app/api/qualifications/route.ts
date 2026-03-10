import { NextRequest, NextResponse } from "next/server";
import { validate } from "@/lib/validate";
import { createQualification, createQualificationSchema, listQualifications } from "@/services/qualification.service";

export async function POST(request: NextRequest) {

  const formData = await request.formData();

  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json(
      { error: "FILE_REQUIRED" },
      { status: 400 }
    );
  }

  const body = {
    name: formData.get("name"),
    code: formData.get("code"),
    description: formData.get("description") ?? undefined,
    subfieldPublicId: formData.get("subfieldPublicId"),
    sortOrder: formData.get("sortOrder")
      ? Number(formData.get("sortOrder"))
      : undefined,
  };

  const result = validate(createQualificationSchema, body);

  if (!result.success) {
    return result.response;
  }

  try {
    const qualification = await createQualification(result.data, file);

    return NextResponse.json(qualification, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const subfieldPublicId = searchParams.get('subfieldPublicId') as string | undefined;
  const qualifications = await listQualifications(subfieldPublicId);
  return NextResponse.json(qualifications);
}