import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  const Key = new TextEncoder().encode(process.env.jWT_SECRET);
  const payload = { email: "ikshimuluits@gmail.com", username: "ikshimul" };
  let token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(Key);

  return NextResponse.json({ token: token });
}

export async function POST(req, res) {
  const jsonBody = await req.json();
  const token = jsonBody["token"];
  const Key = new TextEncoder().encode(process.env.jWT_SECRET);

  const decoded = await jwtVerify(token, Key);
  return NextResponse.json({ decoded });
}
