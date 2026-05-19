import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";
import { hasSmtpConfigured, sendSalesEmail } from "../_email/mailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
  page?: string;
};

function clean(s: unknown) {
  return typeof s === "string" ? s.trim() : "";
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const topic = clean(body.topic);
  const message = clean(body.message);
  const page = clean(body.page);

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields (name, email, message)." },
      { status: 400 },
    );
  }

  if (!hasSmtpConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email sending is not configured on the server yet. Set SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS.",
      },
      { status: 500 },
    );
  }

  const text = [
    "New Contact Us submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : undefined,
    topic ? `Topic: ${topic}` : undefined,
    page ? `Page: ${page}` : undefined,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  await sendSalesEmail({
    to: SITE.email,
    subject: `SMC Contact — ${topic || name}`,
    replyTo: email,
    text,
  });

  return NextResponse.json({ ok: true });
}

