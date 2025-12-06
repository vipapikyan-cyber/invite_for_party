"use server";

import nodemailer from "nodemailer";

const user = process.env.NEXT_PUBLIC_EMAIL_USER_NAME;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export async function sendEmail({
  nameSurname,
  willCome,
}) {
  const transporter = nodemailer.createTransport({
    secure: true,
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user,
      pass,
    },
  });

  const mailData = {
    from: "'Responded to the invite' <lianaunusyan2307@paara.am>",
    to: "Liana.unusyan@radisson.com",
    subject: "Responded to the invite.",
    text: nameSurname,
    html: `<div>Անուն՝ ${nameSurname} <br>${willCome}<br>}</div>`,
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    return {
      message: error,
      success: false,
    };
  }

  return {
    success: true,
    message: "Շնորհակալություն հրավերին պատասխանելու համար։",
  };
}
