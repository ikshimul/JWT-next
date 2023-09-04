import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  let ToEmail = searchParams.get("email");

  let Transport = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: { rejectUnauthorized: false },
  });

  let myEmail = {
    from: "Test Email <info@teamrabbil.com>",
    to: ToEmail,
    // envelope: {
    //   to: ToEmail, // used as RCPT TO: address for SMTP
    // },
    subject: "Test Email From Web App",
    text: "Test Email From Web App",
  };

  try {
    let result = await Transport.sendMail(myEmail);
    return NextResponse.json({ message: result });
  } catch (e) {
    return NextResponse.json({ message: e });
  }
}
