import { NextRequest, NextResponse } from "next/server";
import { signToken } from "@/lib/auth";
import { findPasswordHashByEmail, findUserByEmail } from "@/services/user.service";
import { verifyPassword } from "@/services/password.service";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  try {
    const { passwordHash } = await findPasswordHashByEmail(email)

    if (!await verifyPassword(passwordHash, password)) {
      return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });
    }

    const user = await findUserByEmail(email);
    const token = signToken(user);

    const response = NextResponse.json({ success: true });

    response.cookies.set("access_token", token, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });
  }
}