import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("access_token")?.value;

  const isAdminRoute = pathname.startsWith("/admin");
  const isApiWrite = pathname.startsWith("/api") && request.method !== "GET";
  const isApiLogin = pathname.startsWith("/api/login");

  if (!isAdminRoute && !isApiWrite || isApiLogin) {
    return NextResponse.next();
  }

  if (!token) {
    if (isAdminRoute) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }

  try {
    verifyToken(token);
  } catch {
    if (isAdminRoute) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/:path*"
  ]
};