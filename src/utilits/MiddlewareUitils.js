import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload["email"]);
    console.log(requestHeaders);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch (e) {
    console.log(e);
    return NextResponse.redirect(new URL("/registration", req.url));
  }
}
