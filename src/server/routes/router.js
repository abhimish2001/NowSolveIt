const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// POST /register route
router.post("/register", (req, res) => {
  const { name, email, message } = req.body;

  // Set up transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // Your verified sender email
      pass: process.env.PASSWORD, // Email password from .env
    }
  });
  

  // Verify the connection configuration
  transporter.verify((error, success) => {
    if (error) {
      console.error("Error with transporter:", error);
      return res.status(500).json({
        status: "error",
        message: "Failed to initialize email transporter.",
        error: error,
      });
    }
    console.log("Server is ready to send emails!");

    

    // Email options
    const mailOptions = {
      replyTo: email,
      to: "abhimish2001@gmail.com", // Recipient email
      subject: `New Query from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Hi NSI,</p>
    
          <p>You have received a new query from your website:</p>
    
          <blockquote style="border-left: 4px solid #ddd; padding-left: 10px; margin: 15px 0; font-style: italic;">
            "${message}"
          </blockquote>
    
          <h3 style="margin-bottom: 5px; font-size: 16px; text-decoration: underline; color: #555;">User Details</h3>
          <ul style="list-style-type: none; padding: 0;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></li>
          </ul>
    
          <p>Best regards,</p>
          <p>Your Website Team</p>
        </div>
      `,
    };
    

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({
          status: "error",
          message: "Failed to send email.",
          error: error,
        });
      }
      console.log("Email sent: " + info.response);
      return res.status(200).json({
        status: "success",
        message: "Email successfully sent!",
        info: info,
      });
    });
  });
});

module.exports = router;
