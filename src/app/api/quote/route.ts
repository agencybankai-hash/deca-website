import { NextResponse } from "next/server";

/**
 * POST /api/quote
 * Receives quote form submissions.
 *
 * TODO: Connect to email service (SendGrid, Resend, etc.) or CRM.
 * For now, logs the submission and returns success.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, phone, projectType, message, configuration } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log submission (visible in server console / Vercel logs)
    console.log("═══ NEW QUOTE REQUEST ═══");
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Project: ${projectType}`);
    console.log(`Message: ${message}`);
    if (configuration) console.log(`Config: ${configuration}`);
    console.log(`Time: ${new Date().toISOString()}`);
    console.log("═════════════════════════");

    // TODO: Send email notification
    // await sendEmail({
    //   to: "info@decawindows.com",
    //   subject: `New Quote Request from ${firstName} ${lastName}`,
    //   body: `...`,
    // });

    // TODO: Push to CRM (HubSpot, Salesforce, etc.)
    // await pushToCRM(body);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
