import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { firstname, lastname, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_FROM,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_FROM, // your Gmail
    to: process.env.NEXT_PUBLIC_EMAIL_TO,     // your receiving email
    replyTo: email, // this makes replying go to the user!
    subject: `New message from ${firstname} ${lastname}`,
    text: `From: ${firstname} ${lastname}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };


  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
