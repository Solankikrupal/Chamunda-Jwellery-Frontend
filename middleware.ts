import { NextRequest, NextResponse } from "next/server";
import { getCurrentUserDetail } from "./app/Auth";

export function middleware(request: NextRequest) {
  try {
    const path = request.nextUrl.pathname;

    // Determine if the request is for admin or user paths
    const isAdminPath = path.startsWith("/admin");
    const isAdminLoginPath = path === "/admin/login";
    const isUserLoginPath = path === "/login";
    const isUserPath = !isAdminPath && path !== "/login";

    // Get user details based on the path type
    const sessionType = isAdminPath ? "adminSession" : "userSession";
    const getUser = getCurrentUserDetail(sessionType);
    const currentUser = getUser ? JSON.parse(getUser) : null;

    // Extract token and role from user details
    const token = currentUser?.token;
    const roleName = currentUser?.role?.roleName;

    // Logging for debugging
    console.log('Path: =========', path);
    console.log('isAdminPath: ========= ', isAdminPath);
    console.log('isAdminLoginPath: ========= ', isAdminLoginPath);
    console.log('isUserPath: ========= ', isUserPath);
    console.log('isUserLoginPath: ========= ', isUserLoginPath);
    console.log('currentUser, token, roleName: ========= ', currentUser, token, roleName);

    // Redirect logic based on path type and authentication status
    if (isAdminLoginPath) {
      if (roleName === "Admin" && token) {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
      return NextResponse.next();
    }

    if (isAdminPath && !isAdminLoginPath) {
      if (!token || roleName !== "Admin") {
        return NextResponse.redirect(new URL("/admin/login", request.url));
      }
      return NextResponse.next();
    }

    // if (isUserLoginPath) {
    //   if (roleName === "Employee" && token) {
    //     return NextResponse.redirect(new URL("/", request.url));
    //   }
    //   return NextResponse.next();
    // }

    // if (isUserPath) {
    //   if (!token) {
    //     return NextResponse.redirect(new URL("/login", request.url));
    //   }
    //   return NextResponse.next();
    // }

    // Continue with the request if no redirection occurred
    return NextResponse.next();
  } catch (error) {
    console.error("Error in middleware:", error);
    // Redirect to not-found page in case of an error
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)", "/"],
};
