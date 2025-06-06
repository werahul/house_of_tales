import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { fullName, email, phone, location, date, endDate } = body;

  const userEmail = process.env.NEXT_PUBLIC_USER_EMAIL;
  const userPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;

  // Format current date for the email
  const submissionDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const days = Math.ceil(
    (new Date(endDate).getTime() - new Date(date).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: userEmail,
        pass: userPassword,
      },
    });

    const mailOptions = {
      from: `"House of Tales" <${userEmail}>`,
      to: "heyhouseoftales@gmail.com",
      replyTo: email,
      subject: `New Event Request from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
            }
            .header {
              background-color: #4a6da7;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              padding: 20px;
              border: 1px solid #ddd;
              border-top: none;
              border-radius: 0 0 5px 5px;
            }
            .info-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            .info-table td {
              padding: 10px;
              border-bottom: 1px solid #eee;
            }
            .info-table tr:last-child td {
              border-bottom: none;
            }
            .label {
              font-weight: bold;
              width: 150px;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #777;
              text-align: center;
              border-top: 1px solid #eee;
              padding-top: 15px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New Booking Request</h1>
          </div>
          
          <div class="content">
            <p>A new booking request has been submitted through the website contact form.</p>
            
            <table class="info-table">
              <tr>
                <td class="label">Full Name:</td>
                <td>${fullName}</td>
              </tr>
              <tr>
                <td class="label">Email:</td>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone:</td>
                <td>${phone}</td>
              </tr>
              <tr>
                <td class="label">Location:</td>
                <td>${location}</td>
              </tr>
              <tr>
                <td class="label">Event Start Date:</td>
                <td>${date}</td>
              </tr>
              <tr>
                <td class="label">Event End Date:</td>
                <td>${endDate}</td>
              </tr>
              <tr>
                <td class="label">No. of Days:</td>
                <td>${days}</td>
              </tr>
              <tr>
                <td class="label">Submitted On:</td>
                <td>${submissionDate}</td>
              </tr>
            </table>
            
            <p>Please respond to this inquiry as soon as possible.</p>
          </div>
          
          <div class="footer">
            <p>This is an automated message from your House of Tales website.</p>
            <p>© ${new Date().getFullYear()} House of Tales. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
