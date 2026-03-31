import { NextRequest, NextResponse } from "next/server";
import { changeUserPassword } from "@/services/password.service";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> },) {
  if (await changeUserPassword(await request.json())) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ error: "PASSWORD_CHANGE_FAILED" }, { status: 400 });
  }
}
