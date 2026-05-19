import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";
import { hasSmtpConfigured, sendSalesEmail } from "../_email/mailer";

type EligibilityPayload = {
  name?: string;
  email?: string;
  phone?: string;
  studentType?: "international" | "domestic" | "other" | string;
  currentLocation?: string;
  destination?: string;
  level?: string;
  programInterest?: string;
  intake?: string;
  budgetCad?: string;
  education?: string;
  grades?: string;
  englishTest?: string;
  visaRefusal?: string;
  notes?: string;
  page?: string;
};

function clean(s: unknown) {
  return typeof s === "string" ? s.trim() : "";
}

export async function POST(req: Request) {
  let body: EligibilityPayload;
  try {
    body = (await req.json()) as EligibilityPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const studentType = clean(body.studentType);
  const currentLocation = clean(body.currentLocation);
  const destination = clean(body.destination);
  const level = clean(body.level);
  const programInterest = clean(body.programInterest);
  const intake = clean(body.intake);
  const budgetCad = clean(body.budgetCad);
  const education = clean(body.education);
  const grades = clean(body.grades);
  const englishTest = clean(body.englishTest);
  const visaRefusal = clean(body.visaRefusal);
  const notes = clean(body.notes);
  const page = clean(body.page);

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields (name, email)." },
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
    "New Eligibility Check submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : undefined,
    studentType ? `Student type: ${studentType}` : undefined,
    currentLocation ? `Current location: ${currentLocation}` : undefined,
    destination ? `Destination: ${destination}` : undefined,
    level ? `Study level: ${level}` : undefined,
    programInterest ? `Program interest: ${programInterest}` : undefined,
    intake ? `Desired intake: ${intake}` : undefined,
    budgetCad ? `Budget (CAD): ${budgetCad}` : undefined,
    education ? `Education: ${education}` : undefined,
    grades ? `Grades: ${grades}` : undefined,
    englishTest ? `English test: ${englishTest}` : undefined,
    visaRefusal ? `Visa refusal history: ${visaRefusal}` : undefined,
    page ? `Page: ${page}` : undefined,
    "",
    notes ? "Notes:" : undefined,
    notes || undefined,
  ]
    .filter(Boolean)
    .join("\n");

  await sendSalesEmail({
    to: SITE.email,
    subject: `SMC Eligibility Check — ${name}`,
    replyTo: email,
    text,
  });

  return NextResponse.json({ ok: true });
}

