import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, projectDetails } = body;

    const message = [
      service && `Service: ${service}`,
      company && `Company: ${company}`,
      projectDetails && `Details: ${projectDetails}`,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch(process.env.LMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.LMS_INTERNAL_SECRET,
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        domain: "digitalsahaay.com",
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("LMS error:", res.status, errText);
      return NextResponse.json({ success: false }, { status: 502 });
    }

    const data = await res.json();
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}