import { auth } from "@/authentication/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default auth((req: NextRequest & { auth: any }) => {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;
  const isLoggedIn = !!req.auth;

  // 🚨 ALLOW NEXTAUTH API ROUTES (VERY IMPORTANT)
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const isAuthRoute = pathname.startsWith("/auth");
  const isProtectedRoute = pathname === "/";

  // 🔒 Not logged in → protect app
  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(
      new URL("/auth/sign-in", nextUrl)
    );
  }

  // 🔁 Logged in → block auth pages
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(
      new URL("/", nextUrl)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
