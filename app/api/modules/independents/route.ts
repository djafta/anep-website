import { NextRequest, NextResponse } from "next/server";
import { validate } from "@/lib/validate";
import { createModule, createModuleSchema, listModules } from "@/services/module.service";

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
    title: formData.get("title"),
    description: formData.get("description") ?? undefined,
    sortOrder: formData.get("sortOrder") ? Number(formData.get("sortOrder")) : undefined,
  };

  const result = validate(createModuleSchema, body);

  if (!result.success) {
    return result.response;
  }

  try {
    const module = await createModule(result.data, file);

    return NextResponse.json(module, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "INTERNAL_ERROR" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const modules = await listModules();
  console.log({ modules });
  return NextResponse.json(modules);
}