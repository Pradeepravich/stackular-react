const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pradeepapril91@gmail.com',
      pass: 'avxjssculntkqlyh',
    },
  });

  const mailOptions = {
    from: 'pradeepapril91@gmail.com',
    to: 'pradeepjan89@gmail.com',
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', info }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error }),
    };
  }
};
