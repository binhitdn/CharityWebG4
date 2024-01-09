// pages/api/submit.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, subject, message } = req.body;

  // Xử lý việc gửi email
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'anvy1791@gmail.com', 
        pass: 'ancham11111', 
      },
    });

    const mailOptions = {
      from: 'anvy1791@gmail.com',
      to: 'anvy1791@gmail.com', 
      subject: subject,
      text: `Email: ${email}\n\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
}
