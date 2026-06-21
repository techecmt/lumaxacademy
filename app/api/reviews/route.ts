import { NextResponse } from "next/server";

type ReviewRequest = {
  name?: unknown;
  overallRating?: unknown;
  trainingRating?: unknown;
  trainerRating?: unknown;
  description?: unknown;
};

type SupabaseReviewRow = {
  id: string;
  name: string;
  overall_rating: number;
  training_rating: number;
  trainer_rating: number;
  description: string;
  created_at: string;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function toRating(value: unknown) {
  const num = Number(value);
  if (!Number.isInteger(num) || num < 1 || num > 5) return null;
  return num;
}

function getSupabaseConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseKey) return null;
  return { supabaseUrl, supabaseKey };
}

export async function GET(request: Request) {
  const cfg = getSupabaseConfig();

  if (!cfg) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const rawLimit = Number(searchParams.get("limit"));
  const limit =
    Number.isFinite(rawLimit) && rawLimit > 0
      ? Math.min(Math.floor(rawLimit), 12)
      : 6;

  const response = await fetch(
    `${cfg.supabaseUrl}/rest/v1/lumax_website_reviews?select=id,name,overall_rating,training_rating,trainer_rating,description,created_at&order=created_at.desc&limit=${limit}`,
    {
      method: "GET",
      headers: {
        apikey: cfg.supabaseKey,
        Authorization: `Bearer ${cfg.supabaseKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to load reviews right now." },
      { status: 502 }
    );
  }

  const rows = (await response.json()) as SupabaseReviewRow[];

  const reviews = rows.map((row) => ({
    id: row.id,
    name: row.name,
    overallRating: row.overall_rating,
    trainingRating: row.training_rating,
    trainerRating: row.trainer_rating,
    description: row.description,
    createdAt: row.created_at,
  }));

  return NextResponse.json({ reviews });
}

export async function POST(request: Request) {
  const cfg = getSupabaseConfig();

  if (!cfg) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 500 }
    );
  }

  let body: ReviewRequest;
  try {
    body = (await request.json()) as ReviewRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = text(body.name);
  const description = text(body.description);
  const overallRating = toRating(body.overallRating);
  const trainingRating = toRating(body.trainingRating);
  const trainerRating = toRating(body.trainerRating);

  if (!name || !description || !overallRating || !trainingRating || !trainerRating) {
    return NextResponse.json(
      {
        error:
          "Please provide your name, description, and all ratings between 1 and 5.",
      },
      { status: 400 }
    );
  }

  const response = await fetch(`${cfg.supabaseUrl}/rest/v1/lumax_website_reviews`, {
    method: "POST",
    headers: {
      apikey: cfg.supabaseKey,
      Authorization: `Bearer ${cfg.supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name,
      overall_rating: overallRating,
      training_rating: trainingRating,
      trainer_rating: trainerRating,
      description,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Unable to submit your review right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
