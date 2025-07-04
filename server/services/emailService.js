const nodemailer = require('nodemailer');

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Verify email configuration
const verifyEmailConfig = async () => {
  try {
    await transporter.verify();
    console.log('✅ Email service configured successfully');
    return true;
  } catch (error) {
    console.log('⚠️ Email service not configured:', error.message);
    return false;
  }
};

// Send contact form notification
const sendContactNotification = async (contactData) => {
  try {
    const { name, email, message, subject, phone } = contactData;
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from IntelliSync Contact Form</small></p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent');
    return true;
  } catch (error) {
    console.error('Failed to send contact notification:', error);
    return false;
  }
};

// Send welcome email
const sendWelcomeEmail = async (userData) => {
  try {
    const { email, name } = userData;
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Welcome to IntelliSync!',
      html: `
        <h2>Welcome to IntelliSync, ${name}!</h2>
        <p>Thank you for registering with us. We're excited to have you on board!</p>
        <p>Here are some things you can do to get started:</p>
        <ul>
          <li>Explore our services</li>
          <li>Check out our latest blog posts</li>
          <li>Contact our support team if you need help</li>
        </ul>
        <p>If you have any questions, feel free to reach out to us.</p>
        <p>Best regards,<br>The IntelliSync Team</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent to:', email);
    return true;
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return false;
  }
};

// Send password reset email
const sendPasswordResetEmail = async (email, resetToken) => {
  try {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Password Reset Request - IntelliSync',
      html: `
        <h2>Password Reset Request</h2>
        <p>You requested a password reset for your IntelliSync account.</p>
        <p>Click the link below to reset your password:</p>
        <p><a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a></p>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This link will expire in 1 hour.</p>
        <p>Best regards,<br>The IntelliSync Team</p>
      `
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent to:', email);
    return true;
  } catch (error) {
    console.error('Failed to send password reset email:', error);
    return false;
  }
};

// Send notification email
const sendNotificationEmail = async (to, subject, content) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to,
      subject,
      html: content
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent to:', to);
    return true;
  } catch (error) {
    console.error('Failed to send notification email:', error);
    return false;
  }
};

module.exports = {
  verifyEmailConfig,
  sendContactNotification,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendNotificationEmail
}; 