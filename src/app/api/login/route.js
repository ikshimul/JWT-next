import { TokenCookie } from "@/utilits/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSON = await req.json();
  let email = JSON["email"];
  let password = JSON["password"];
  if (email === "ikshimuluits@gmail.com" && password === "123") {
    let cookie = await TokenCookie(email);
    return NextResponse.json(
      { status: true, message: "login success" },
      { status: 200, headers: cookie }
    );
  } else {
    return NextResponse.json({ status: false, message: "login fail" });
  }
}
