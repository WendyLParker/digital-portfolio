// alafour-contact-form Lambda
export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS"
  };

  const toEmail = process.env.TO_EMAIL;
  const fromEmail = process.env.FROM_EMAIL;

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, message: "Name, email, and message are required." })
      };
    }

    const { SESClient, SendEmailCommand } = await import("@aws-sdk/client-ses");

    const sesClient = new SESClient({ region: "us-east-2" });

    const params = {
      Destination: { ToAddresses: [toEmail] },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
              <hr>
              <p><small>Sent from Alafour.com at ${new Date().toISOString()}</small></p>
            `
          }
        },
        Subject: { Charset: "UTF-8", Data: `New Message from ${name} - Alafour.com` }
      },
      Source: fromEmail
    };

    await sesClient.send(new SendEmailCommand(params));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "Message sent successfully!" })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, message: "Failed to send message. Please try again later." })
    };
  }
};