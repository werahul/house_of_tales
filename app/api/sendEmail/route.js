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

    // Email to the business
    const businessMailOptions = {
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
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 650px;
              margin: 0 auto;
              background-color: #f9f9f9;
            }
            .container {
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 8px rgba(0,0,0,0.05);
              border: 1px solid #e0e0e0;
            }
            .header {
              background: linear-gradient(135deg, #4a6da7 0%, #3a5a8f 100%);
              color: white;
              padding: 25px 20px;
              text-align: center;
              border-bottom: 5px solid #3a5a8f;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 600;
              letter-spacing: 0.5px;
            }
            .header-logo {
              margin-bottom: 15px;
            }
            .content {
              padding: 30px 25px;
            }
            .notification-box {
              background-color: #f0f7ff;
              border-left: 4px solid #4a6da7;
              padding: 15px;
              margin-bottom: 25px;
              border-radius: 4px;
            }
            .info-table {
              width: 100%;
              border-collapse: collapse;
              margin: 25px 0;
            }
            .info-table td {
              padding: 12px 15px;
              border-bottom: 1px solid #eee;
            }
            .info-table tr:last-child td {
              border-bottom: none;
            }
            .info-table tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            .label {
              font-weight: 600;
              width: 150px;
              color: #4a6da7;
            }
            .action-required {
              background-color: #fff8e1;
              border-left: 4px solid #ffc107;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
            }
            .footer {
              margin-top: 30px;
              font-size: 13px;
              color: #777;
              text-align: center;
              border-top: 1px solid #eee;
              padding: 20px 0 10px;
            }
            .divider {
              height: 1px;
              background-color: #eee;
              margin: 25px 0;
            }
            a {
              color: #4a6da7;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="header-logo">📋</div>
              <h1>New Booking Request</h1>
            </div>
            
            <div class="content">
              <div class="notification-box">
                <p>A new booking request has been submitted through the House of Tales website contact form.</p>
              </div>
              
              <h2 style="color: #4a6da7; border-bottom: 2px solid #eee; padding-bottom: 10px;">Client Details</h2>
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
              </table>
              
              <h2 style="color: #4a6da7; border-bottom: 2px solid #eee; padding-bottom: 10px;">Event Details</h2>
              <table class="info-table">
                <tr>
                  <td class="label">Start Date:</td>
                  <td>${date}</td>
                </tr>
                <tr>
                  <td class="label">End Date:</td>
                  <td>${endDate}</td>
                </tr>
                <tr>
                  <td class="label">Duration:</td>
                  <td><strong>${days} days</strong></td>
                </tr>
                <tr>
                  <td class="label">Submitted On:</td>
                  <td>${submissionDate}</td>
                </tr>
              </table>
              
              <div class="action-required">
                <p><strong>Action Required:</strong> Please respond to this inquiry within 24 hours to ensure client satisfaction.</p>
              </div>
            </div>
            
            <div class="footer">
              <p>This is an automated message from your House of Tales website.</p>
              <p>© ${new Date().getFullYear()} House of Tales. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Confirmation email to the customer
    const customerMailOptions = {
      from: `"House of Tales" <${userEmail}>`,
      to: email,
      subject: `We've Received Your Booking Request - House of Tales`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 650px;
              margin: 0 auto;
              background-color: #f9f9f9;
            }
            .container {
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 8px rgba(0,0,0,0.05);
              border: 1px solid #e0e0e0;
            }
            .header {
              background: linear-gradient(135deg, #4a6da7 0%, #3a5a8f 100%);
              color: white;
              padding: 30px 20px;
              text-align: center;
              border-bottom: 5px solid #3a5a8f;
            }
            .header h1 {
              margin: 0;
              font-size: 28px;
              font-weight: 600;
              letter-spacing: 0.5px;
            }
            .header-icon {
              font-size: 40px;
              margin-bottom: 15px;
            }
            .content {
              padding: 30px 25px;
            }
            .confirmation-box {
              background-color: #e8f5e9;
              border-left: 4px solid #4caf50;
              padding: 20px;
              border-radius: 4px;
              margin-bottom: 25px;
            }
            .thank-you {
              font-size: 22px;
              color: #4a6da7;
              margin-top: 0;
              margin-bottom: 15px;
              font-weight: 600;
            }
            .info-table {
              width: 100%;
              border-collapse: collapse;
              margin: 25px 0;
              border-radius: 4px;
              overflow: hidden;
              border: 1px solid #eee;
            }
            .info-table td {
              padding: 12px 15px;
              border-bottom: 1px solid #eee;
            }
            .info-table tr:last-child td {
              border-bottom: none;
            }
            .info-table tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            .label {
              font-weight: 600;
              width: 150px;
              color: #4a6da7;
            }
            .next-steps-box {
              background-color: #fff8e1;
              border-left: 4px solid #ffc107;
              padding: 20px;
              margin: 25px 0;
              border-radius: 4px;
            }
            .next-steps-heading {
              color: #f57c00;
              margin-top: 0;
              font-size: 18px;
            }
            .contact-box {
              background-color: #f5f5f5;
              padding: 20px;
              border-radius: 4px;
              margin: 25px 0;
              text-align: center;
            }
            .phone {
              font-size: 20px;
              font-weight: 600;
              color: #4a6da7;
              margin: 10px 0;
            }
            .footer {
              margin-top: 30px;
              font-size: 13px;
              color: #777;
              text-align: center;
              border-top: 1px solid #eee;
              padding: 20px 0 10px;
            }
            .social {
              margin: 15px 0;
            }
            .social a {
              margin: 0 10px;
              color: #4a6da7;
              text-decoration: none;
            }
            .btn {
              display: inline-block;
              background-color: #4a6da7;
              color: white;
              padding: 12px 25px;
              text-decoration: none;
              border-radius: 4px;
              font-weight: 600;
              margin-top: 15px;
            }
            .divider {
              height: 1px;
              background-color: #eee;
              margin: 25px 0;
            }
            a {
              color: #4a6da7;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="header-icon">✓</div>
              <h1>Booking Request Received</h1>
            </div>
            
            <div class="content">
              <div class="confirmation-box">
                <h2 class="thank-you">Thank You, ${fullName}!</h2>
                <p>We've successfully received your booking request for House of Tales. Our team is excited to help create a memorable experience for your event.</p>
              </div>
              
              <h2 style="color: #4a6da7; border-bottom: 2px solid #eee; padding-bottom: 10px;">Your Request Details</h2>
              <table class="info-table">
                <tr>
                  <td class="label">Name:</td>
                  <td>${fullName}</td>
                </tr>
                <tr>
                  <td class="label">Event Location:</td>
                  <td>${location}</td>
                </tr>
                <tr>
                  <td class="label">Event Dates:</td>
                  <td>${date} to ${endDate}</td>
                </tr>
                <tr>
                  <td class="label">Duration:</td>
                  <td><strong>${days} days</strong></td>
                </tr>
                <tr>
                  <td class="label">Submitted On:</td>
                  <td>${submissionDate}</td>
                </tr>
              </table>
              
              <div class="next-steps-box">
                <h3 class="next-steps-heading">What Happens Next?</h3>
                <p>Our team will review your request and get back to you within <strong>24-48 hours</strong> to discuss:</p>
                <ul>
                  <li>Availability confirmation</li>
                  <li>Customization options for your event</li>
                  <li>Pricing and package details</li>
                  <li>Any additional questions you may have</li>
                </ul>
              </div>
              
              <div class="contact-box">
                <p>Need to reach us immediately?</p>
                <div class="phone">+91 79003 22202</div>
                <p>Or email us at <a href="mailto:heyhouseoftales@gmail.com">heyhouseoftales@gmail.com</a></p>
        
              </div>
              
              <div class="divider"></div>
              
              <p>We look forward to creating a special experience for your event!</p>
              <p>Warm regards,<br><strong>House of Tales Team</strong></p>
            </div>
            
            <div class="footer">
              <div class="social">
                <a href="https://www.instagram.com/houseoftales/">Instagram</a> |
                <a href="https://www.facebook.com/houseoftales/">Facebook</a>
              </div>
              <p>© ${new Date().getFullYear()} House of Tales. All rights reserved.</p>
              <p><small>If you did not make this request, please disregard this email.</small></p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
