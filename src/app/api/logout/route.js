import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function GET(req, res) {
  cookies().delete("token");

  return NextResponse.json({ status: true, message: "Request Completed" });
}
