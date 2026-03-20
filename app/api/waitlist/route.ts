import { NextResponse } from "next/server";
import { z } from "zod";

const waitlistSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(160).optional().default(""),
});

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: "No pudimos leer la solicitud." },
      { status: 400 }
    );
  }

  const parsed = waitlistSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Revisa los datos del formulario." },
      { status: 400 }
    );
  }

  const submission = {
    ...parsed.data,
    company: parsed.data.company || null,
    submittedAt: new Date().toISOString(),
    source: "khora-landing",
    userAgent: request.headers.get("user-agent"),
  };

  const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;

  if (!webhookUrl) {
    console.info("waitlist_submission", submission);
    return NextResponse.json({
      ok: true,
      delivery: "log-only",
    });
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submission),
      cache: "no-store",
    });

    if (!webhookResponse.ok) {
      return NextResponse.json(
        { error: "No pudimos registrar la solicitud." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "No pudimos registrar la solicitud." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    delivery: "webhook",
  });
}
