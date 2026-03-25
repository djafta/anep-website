import { NextRequest, NextResponse } from "next/server";
import { validate } from "@/lib/validate";
import { createUser, createUserSchema, listUsers } from "@/services/user.service";
import { getAuthUser } from "@/lib/auth-user";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const result = validate(createUserSchema, body);

  if (!result.success) {
    return result.response;
  }

  const user = await createUser(result.data);

  return NextResponse.json(user, { status: 201 });
}

export async function GET(request: NextRequest) {
  const user = await getAuthUser();

  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "FORBIDDEN" }, { status: 403 });
  }

  const users = (await listUsers()).filter(u => u.publicId !== user.publicId);

  return NextResponse.json(users);
}