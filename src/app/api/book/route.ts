import { NextResponse } from "next/server";
import { Resend } from "resend";
import { decodeVIN } from "@/src/lib/vin-decoder";

import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const resend = new Resend(process.env.RESEND_API_KEY);

// Convex connection
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullname,
      phone,
      email,
      type,
      brand,
      vin,   
      date,
      time,
      description,
    } = body;

    // --- 1. Decode VIN ---
    const decodedVin = decodeVIN(vin);

    // --- 2. Send Email to Client ---
    await resend.emails.send({
      from: "Oficina Numero 1 <no-reply@oficina.co.ao>",
      to: email,
      subject: "We received your maintenance request",
      html: `
        <p>Dear ${fullname},</p>
        <p>
          We received your application for maintenance on <b>${date}</b> at <b>${time}</b> 
          for your <b>${brand}</b>.
        </p>
        <p>
          Our specialist will contact you shortly by phone: <b>${phone}</b>.
          If this number is incorrect, please call us or refill the form.
        </p>
        <p>Thank you,<br/>Oficina Número 1</p>
      `,
    });

    // --- 3. Send Email to Team ---
    await resend.emails.send({
      from: "Oficina Numero 1 <no-reply@oficina.co.ao>",
      to: "khachatryankhachatur57@gmail.com",
      subject: `New Booking: ${fullname} (${brand})`,
      html: `
        <h2>New Service Booking</h2>
        <p><b>Client Name:</b> ${fullname}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>

        <p><b>Vehicle Type:</b> ${type}</p>
        <p><b>Brand / Model:</b> ${brand}</p>
        <p><b>VIN:</b> ${vin}</p>

        <h3>Decoded VIN Details</h3>
        <p><b>Manufacturer:</b> ${decodedVin.manufacturer}</p>
        <p><b>Model Year:</b> ${decodedVin.year}</p>
        <p><b>Plant:</b> ${decodedVin.plant}</p>
        <p><b>Serial Number:</b> ${decodedVin.serial}</p>

        <h3>Service Info</h3>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Description:</b> ${description}</p>

        <hr/>
        <p><i>Stored automatically in Convex CRM.</i></p>
      `,
    });

    // --- 4. Store into Convex Database ---
    await convex.mutation(api.bookings.createBooking, {
      fullname,
      phone,
      email,
      type,
      brand,
      vin,
      date,
      time,
      description,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
