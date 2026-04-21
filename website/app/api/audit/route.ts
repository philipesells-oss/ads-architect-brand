import { NextRequest, NextResponse } from 'next/server';

const GHL_WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/LBQUZIREDdmwChWAX8Yl/webhook-trigger/955ddd5c-534c-4943-b010-6675abd1a2f3';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, businessName, website, budget, challenge, email, phone } = body;

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Normalize phone to E.164 format (remove spaces, dashes, parens)
    const normalizedPhone = phone ? phone.replace(/[\s\-().]/g, '') : '';

    const payload = {
      firstName,
      companyName: businessName,
      email,
      phone: normalizedPhone,
      website,
      source: 'adsarchitect.agency',
      tags: ['audit-request', 'lead-site'],
      customField: {
        adbudget: budget,
        mainchallenge: challenge,
      },
    };

    const ghlRes = await fetch(GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!ghlRes.ok) {
      throw new Error(`GHL webhook responded with ${ghlRes.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[audit] webhook error:', err);
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 });
  }
}
