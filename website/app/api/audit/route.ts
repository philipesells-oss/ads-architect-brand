import { NextRequest, NextResponse } from 'next/server';

const GHL_API_BASE = 'https://services.leadconnectorhq.com';
const GHL_API_VERSION = '2021-07-28';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, businessName, website, budget, challenge, email, phone } = body;

    if (!firstName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.GHL_API_KEY;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!apiKey || !locationId) {
      throw new Error('GHL credentials not configured');
    }

    // Normalize phone to E.164 (remove spaces, dashes, parens)
    const normalizedPhone = phone ? phone.replace(/[\s\-().]/g, '') : undefined;

    const payload = {
      locationId,
      firstName,
      companyName: businessName,
      email,
      ...(normalizedPhone && { phone: normalizedPhone }),
      website,
      source: 'adsarchitect.agency',
      tags: ['audit-request', 'lead-site'],
      customFields: [
        { key: 'contact.adbudget', field_value: budget || '' },
        { key: 'contact.mainchallenge', field_value: challenge || '' },
      ],
    };

    const ghlRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        Version: GHL_API_VERSION,
      },
      body: JSON.stringify(payload),
    });

    if (!ghlRes.ok) {
      const errText = await ghlRes.text();
      throw new Error(`GHL API responded with ${ghlRes.status}: ${errText}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[audit] GHL error:', err);
    return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 });
  }
}
