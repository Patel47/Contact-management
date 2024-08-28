import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define the routes that require authentication
const protectedRoutes = ["/dashboard", "/profile"];

// Define routes that should be blocked for authenticated users
const unauthenticatedRoutes = ["/signin", "/signup"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("authToken");

  // Redirect authenticated users away from signin or signup pages
  if (
    unauthenticatedRoutes.some((route: any) => pathname.startsWith(route)) &&
    token
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If the route is protected and the user is not authenticated, redirect to signin page
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Allow the request to proceed if all checks pass
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/signin", "/signup"],
};
