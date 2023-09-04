import { CheckCookieAuth } from "./utilits/MiddlewareUitils";
import { NextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(req);
  }
  // else if (req.nextUrl.pathname.startsWith("/registration")) {
  //   let token = req.cookies.get("token");
  //   if (token) {
  //     return NextResponse.redirect(new URL("/dashboard", req.url));
  //   } else {
  //     return NextResponse.next();
  //   }
  // }
}
