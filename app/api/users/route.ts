import { NextRequest, NextResponse } from "next/server";
import { validate } from "@/lib/validate";
import { createUser, createUserSchema } from "@/services/user.service";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const result = validate(createUserSchema, body);

  if (!result.success) {
    return result.response;
  }

  const user = await createUser(result.data);

  return NextResponse.json(user, { status: 201 });
}