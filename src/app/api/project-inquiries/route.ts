import {
  buildProjectInquiryEmail,
  validateProjectInquiry,
} from "@/lib/project-inquiry-server";

const MAX_REQUEST_BYTES = 20_000;

function errorResponse(message: string, status: number) {
  return Response.json(
    { ok: false, message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);

  if (contentLength > MAX_REQUEST_BYTES) {
    return errorResponse("This inquiry is too large to send.", 413);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return errorResponse("Please submit the inquiry form again.", 415);
  }

  let bodyText: string;

  try {
    bodyText = await request.text();
  } catch {
    return errorResponse("Please submit the inquiry form again.", 400);
  }

  if (bodyText.length > MAX_REQUEST_BYTES) {
    return errorResponse("This inquiry is too large to send.", 413);
  }

  let body: unknown;

  try {
    body = JSON.parse(bodyText);
  } catch {
    return errorResponse("Please submit the inquiry form again.", 400);
  }

  const validation = validateProjectInquiry(body);

  if (!validation.success) {
    if (validation.isBot) {
      return errorResponse("We could not process this inquiry.", 400);
    }

    return Response.json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        errors: validation.errors,
      },
      { status: 400, headers: { "Cache-Control": "no-store" } },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.PROJECT_INQUIRY_FROM_EMAIL;
  const to = process.env.PROJECT_INQUIRY_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return errorResponse(
      "We couldn't send your inquiry just now. Please try again.",
      503,
    );
  }

  const email = buildProjectInquiryEmail(validation.data);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: email.subject,
        text: email.text,
        html: email.html,
        reply_to: validation.data.email,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(12_000),
    });

    if (!response.ok) {
      return errorResponse(
        "We couldn't send your inquiry just now. Please try again.",
        502,
      );
    }
  } catch {
    return errorResponse(
      "We couldn't send your inquiry just now. Please try again.",
      502,
    );
  }

  return Response.json(
    { ok: true },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
}
