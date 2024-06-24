import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as _ from "lodash";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const firstName = _.get(data, "firstName", "Jane");
    const lastName = _.get(data, "lastName", "Doe");
    const email = _.get(data, "email", "jane@gmail.com");
    const phoneNumber = _.get(data, "phoneNumber", "");
    const company = _.get(data, "company", "Some company");
    const subject = _.get(data, "subject", "Some subject");
    const message = _.get(data, "message", "Some message");

    console.log(`SUPPORT_EMAIL: ${process.env.SUPPORT_EMAIL}`);
    console.log(`EMAIL_PASSWORD: ${process.env.EMAIL_PASSWORD}`);

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SUPPORT_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      socketTimeout: 60000,
      connectionTimeout: 60000,
    });

    const info = await transporter.sendMail({
      from: {
        name: `${firstName} ${lastName}`,
        address: email,
      },
      to: "support@united4digital.com",
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

    console.log("Email sent successfully:", info);
    return NextResponse.json({ info: info });
  } catch (error: any) {
    console.error("Send mail Error:", error);
    if (error.response) {
      console.error("SMTP Response:", error.response);
    }
    return NextResponse.json({ error: "Failed to send mail." }, { status: 500 });
  }
}
