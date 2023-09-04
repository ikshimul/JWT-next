import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const JSON = await req.json();
  let email = JSON["email"];
  let password = JSON["password"];
  let address = JSON["address"];

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
    from: "info@teamrabbil.com",
    envelope: {
      to: email,
    },
    subject: "OTP Mail From Web App",
    text: "Use the following OTP to complete your Sign Up procedures.Your OTP 1234",
    html: "<p>Use the following OTP to complete your Sign Up procedures.Your OTP <b>1234</b></p>",
  };

  try {
    Transport.sendMail(myEmail);
    return NextResponse.json({ status: true, message: "mail send" });
  } catch (e) {
    return NextResponse.json({ status: false, message: e });
  }
}
