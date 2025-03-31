import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { email } = req.body as { email?: string };
  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
      port: Number(process.env.SMTP_PORT), // e.g., 465
      secure: process.env.SMTP_SECURE === "true", // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL, // e.g., "Kas <no-reply@holistickas.com>"
      to: email,
      subject: "Welcome to the Holistic Kas Newsletter",
      text: "Thank you for subscribing to Holistic Kas! Stay tuned for holistic health insights and upcoming events.",
      html: `<p>Thank you for subscribing to <strong>Holistic Kas</strong>! Stay tuned for holistic health insights and upcoming events.</p>`,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Subscription successful. Welcome email sent." });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Failed to send welcome email." });
    }
  }
}
