import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as _ from "lodash";

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data, "data");

  const firstName = _.get(data, "firstName", "Jane");
  const lastName = _.get(data, "lastName", "Doe");
  const email = _.get(data, "email", "jane@gmail.com");
  const phoneNumber = _.get(data, "phoneNumber", "");
  const company = _.get(data, "company", "Some company");
  const subject = _.get(data, "subject", "Some subject");
  const message = _.get(data, "message", "Some message");

  console.log(process.env.SUPPORT_EMAIL, "email")
  console.log(process.env.EMAIL_PASSWORD, "pass")

  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,
      secure: false, // true для порта 465, false для порта 587
      auth: {
        user: process.env.SUPPORT_EMAIL, // Ваш адрес электронной почты GoDaddy
        pass: process.env.EMAIL_PASSWORD, // Пароль от вашей электронной почты GoDaddy
      },
    });

    const info = await transporter.sendMail({
      from: {
        name: `${firstName} ${lastName}`,
        address: email, // Отправитель письма — пользователь формы
      },
      to: "support@united4digital.com", // Направление письма
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

// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import * as _ from "lodash";

// export async function POST(req: Request) {
//   const data = await req.json();
//   console.log(data, "data")
//   const PERSONAL_EMAIL = _.get(
//     process.env,
//     "PERSONAL_EMAIL",
//     "portal.sid.grand2@gmail.com"
//   );
//   const EMAIL_PASSWORD = _.get(
//     process.env,
//     "EMAIL_PASSWORD",
//     "ddf ewe sdf rew"
//   );
//   const firstName = _.get(data, "firstName", "Jane");
//   const lastName = _.get(data, "lastName", "Doe");
//   const email = _.get(data, "email", "jane@gmail.com");
//   const phoneNumber = _.get(data, "phoneNumber", "");
//   const company = _.get(data, "company", "Some company");
//   const subject = _.get(data, "subject", "Some subject");
//   const message = _.get(data, "message", "Some message");

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "portal.sid.grand2@gmail.com",
//         pass: "xorl lyrj pyme pmvr",
//       },
//     });
//     const info = await transporter.sendMail({
//       from: {
//         name: `${firstName} ${lastName}`,
//         address: PERSONAL_EMAIL,
//       },
//       to: PERSONAL_EMAIL,
//       subject: subject,
//       text: message,
//       html: `
//         <div>
//           <h2>Customer name: ${firstName} ${lastName}</h2>
//           <h3>Customer phone: ${phoneNumber}</h3>
//           <h3>Customer email: ${email}</h3>
//           <h3>Customer company: ${company}</h3>
//           <h3>Customer message: </h3>
//           <p>${message}</p>
//         </div>
//       `,
//     });
//     return NextResponse.json({ info: info });
//   } catch (error) {
//     console.error("Send mail Error:", error);
//     throw new Error("Failed to send mail.");
//   }
// }
