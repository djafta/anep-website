import { NextResponse } from "next/server";
import { updateQualification } from "@/services/qualification.service";
import { validate } from "@/lib/validate";
import { findModule, removeModule, updateModuleSchema } from "@/services/module.service";

export async function GET(_request: Request, { params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId: publicId } = await params;

  try {
    return NextResponse.json(await findModule(publicId));
  } catch (err) {
    return NextResponse.json({ error: "QUALIFICATION_NOT_FOUND" }, { status: 404 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId: publicId } = await params;

  await removeModule(publicId)

  return new NextResponse(null, {
    status: 204
  })
}

export async function PATCH(request: Request, { params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId: publicId } = await params;
  const formData = await request.formData();

  const file = formData.get("file") as File | null;

  const body = {
    publicId,
    name: formData.get("name"),
    code: formData.get("code"),
    title: formData.get("title"),
    description: formData.get("description") ?? undefined,
    sortOrder: formData.get("sortOrder") ? Number(formData.get("sortOrder")) : undefined,
  };

  const result = validate(updateModuleSchema, body);

  if (!result.success) {
    return result.response;
  }

  try {
    const module = await updateQualification(result.data, file);

    return NextResponse.json(module, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}