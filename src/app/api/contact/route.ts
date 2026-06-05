import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_SR2RdiPy_9yDVy4KmjGyWpiYnUv4mt6MF');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "rifqiwahyudi16@gmail.com",
      subject: `New message from ${name} via Portfolio`,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}