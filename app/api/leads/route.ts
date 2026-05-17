import { NextResponse } from "next/server";

/** Default `public.colleges` row for website enquiries. Override in env if the id differs per project. */
const LUMAX_ACADEMY_COLLEGE_ID =
  process.env.LUMAX_ACADEMY_COLLEGE_ID ?? "f8a6db20-b97f-48c8-8992-ddd13000b3e1";

type LeadRequest = {
  fullName?: unknown;
  email?: unknown;
  phoneCode?: unknown;
  phone?: unknown;
  courseId?: unknown;
  courseTitle?: unknown;
  nationality?: unknown;
  startMonth?: unknown;
  message?: unknown;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 500 }
    );
  }

  let body: LeadRequest;

  try {
    body = (await request.json()) as LeadRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = text(body.fullName);
  const email = text(body.email);
  const phoneCode = text(body.phoneCode);
  const phone = text(body.phone);
  const courseId = text(body.courseId);
  const courseTitle = text(body.courseTitle);
  const nationality = text(body.nationality);
  const startMonth = text(body.startMonth);
  const message = text(body.message);

  if (!fullName || !phone || !courseId || !nationality || !startMonth) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const formattedPhone = [phoneCode, phone].filter(Boolean).join(" ");
  const notes = [
    nationality ? `Nationality: ${nationality}` : "",
    startMonth ? `Preferred start month: ${startMonth}` : "",
    message ? `Message: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      college_id: LUMAX_ACADEMY_COLLEGE_ID,
      full_name: fullName,
      phone: formattedPhone,
      email: email || null,
      interested_course: courseTitle || courseId,
      source: "website",
      status: "inquiry_received",
      notes: notes || null,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to submit your enquiry right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
