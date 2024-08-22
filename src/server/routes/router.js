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
    },
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
      to: "abhimish2001@gmail.com",
      subject: `Query from ${name}`,
      html: `<p>Hi Yatinidhi,</p><br/><p>${message}</p><br/><br/><p style="font-weight:bold;text-decoration:underline;">User Details</p><p>User Name: ${name}</p><p>Email Id: ${email}</p>`,
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
