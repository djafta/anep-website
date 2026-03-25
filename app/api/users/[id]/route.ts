import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth-user";
import { findUser, updateUser } from "@/services/user.service";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  const user = await getAuthUser();

  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "FORBIDDEN" }, { status: 403 });
  }

  try {
    const { id } = await params
    return NextResponse.json((await findUser(id)));
  } catch {
    return NextResponse.json({ error: "USER_NOT_FOUND" }, { status: 404 });
  }
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  const user = await getAuthUser();

  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "FORBIDDEN" }, { status: 403 });
  }

  try {
    const { id } = await params
    const body = await request.json();
    return NextResponse.json((await updateUser({
      publicId: id,
      ...body
    })));
  } catch {
    return NextResponse.json({ error: "USER_NOT_FOUND" }, { status: 404 });
  }
}
