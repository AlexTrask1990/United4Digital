import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as _ from "lodash";

export async function POST(req: Request) {
  const data = await req.json();

  const firstName = _.get(data, "firstName", "Jane");
  const lastName = _.get(data, "lastName", "Doe");
  const email = _.get(data, "email", "jane@gmail.com");
  const phoneNumber = _.get(data, "phoneNumber", "");
  const company = _.get(data, "company", "Some company");
  const subject = _.get(data, "subject", "Some subject");
  const message = _.get(data, "message", "Some message");

  console.log(process.env.SUPPORT_EMAIL, "email");
  console.log(process.env.EMAIL_PASSWORD, "pass");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SUPPORT_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: {
        name: `${firstName} ${lastName}`,
        address: email,
      },
      to: "support@united4digital.com", // Direction of the letter
      subject: subject,
      text: message,
      html: `
        <div>
          <h2>Customer name: ${firstName} ${lastName}</h2>
          <h3>Customer phone: ${phoneNumber}</h3>
          <h3>Customer email: ${email}</h3>
          <h3>Customer company: ${company}</h3>
          <h3>Customer message: </h3>
          <p>${message}</p>
        </div>
      `,
    });
    return NextResponse.json({ info: info });
  } catch (error) {
    console.error("Send mail Error:", error);
    throw new Error("Failed to send mail.");
  }
}
