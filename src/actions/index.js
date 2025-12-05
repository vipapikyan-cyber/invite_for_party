"use server";

import nodemailer from "nodemailer";

const user = process.env.NEXT_PUBLIC_EMAIL_USER_NAME;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export async function sendEmail({
  invitedBy,
  nameSurname,
  willCome,
  numberOfGuests,
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
    from: "'Responded to the invite' <armenmartirosyan020@gmail.com>",
    to: "vplg2000@mail.ru",
    subject: "Responded to the invite.",
    text: nameSurname,
    html: `<div>Անուն՝ ${nameSurname}<br>Հրավիրված՝ ${invitedBy}ից<br>${willCome}${
      willCome === "Մենք կգանք" ? "՝ " + numberOfGuests : ""
    }</div>`,
  };

  try {
    await transporter.sendMail(mailData);
  } catch (error) {
    return {
      message: "Չհաջողվեց պատասխանել հրավերին։ Խնդրում ենք փորձել կրկին։",
      success: false,
    };
  }

  return {
    success: true,
    message: "Շնորհակալություն հրավերին պատասխանելու համար։",
  };
}
