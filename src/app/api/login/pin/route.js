import { TokenCookie } from "@/utilits/TokenCookie";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const JSON = await req.json();
  console.log(JSON);
  let email = JSON["email"];
  let pin = JSON["pin"];
  console.log(pin);
  if (pin == "1234") {
    let cookie = await TokenCookie(email);

    return NextResponse.json(
      { status: true, message: "login success" },
      { status: 200, headers: cookie }
    );
  } else {
    return NextResponse.json({
      status: false,
      message: "pin varification fail",
    });
  }
}
