import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { fullName, email, phone, location, date, days } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ai.ronycode@gmail.com",
        pass: "ryct edux cgtw utgo", // ⚠️ Use App Password if using Gmail
      },
    });

    const mailOptions = {
      from: "rahuldev.kb@gmail.com",
      to: "ai.ronycode@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>No. of Days:</strong> ${days}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
