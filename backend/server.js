import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL;

app.use(cors());
app.use(express.json());

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const escapeHtml = (value) => {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const createMailTransporter = () => {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

const sendContactEmail = async (contactRequest) => {
  const transporter = createMailTransporter();

  if (!transporter || !CONTACT_RECEIVER_EMAIL) {
    console.log("Email is not configured. Contact request:", contactRequest);
    return;
  }

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: CONTACT_RECEIVER_EMAIL,
    replyTo: contactRequest.email,
    subject: contactRequest.subject || `New portfolio message from ${contactRequest.name}`,
    text: [
      `Name: ${contactRequest.name}`,
      `Email: ${contactRequest.email}`,
      `Subject: ${contactRequest.subject || "No subject"}`,
      `Received: ${contactRequest.receivedAt}`,
      "",
      contactRequest.message
    ].join("\n"),
    html: `
      <h2>New portfolio contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(contactRequest.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(contactRequest.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(contactRequest.subject || "No subject")}</p>
      <p><strong>Received:</strong> ${escapeHtml(contactRequest.receivedAt)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(contactRequest.message).replace(/\n/g, "<br />")}</p>
    `
  });
};

app.get("/", (req, res) => {
  res.json({ message: "Portfolio backend API is running." });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject = "", message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required."
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address."
    });
  }

  const contactRequest = {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString()
  };

  try {
    await sendContactEmail(contactRequest);
  } catch (error) {
    console.error("Failed to send contact email:", error);

    return res.status(500).json({
      success: false,
      message: "Message received, but email sending failed. Please try again later."
    });
  }

  return res.status(200).json({
    success: true,
    message: "Thank you! Your message has been sent successfully."
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
