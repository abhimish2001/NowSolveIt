const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

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

  // Email options
  const mailOptions = {
    replyTo: `${email}`,
    to: `abhimish2001@gmail.com`,
    subject: `Query from ${name}`,
    html: `<p>Hi Yatinidhi,</p><br/><p>${message}</p><br/><br/><p style="font-weight:bold;text-decoration:underline;">User Details</P><p>User Name: ${name}</p><p>e-mail Id: ${email}</p>
    
    
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error", error);
      res.status(500).json({
        status: "error",
        message: "Failed to send email.",
        error: error,
      });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({
        status: "success",
        message: "Email successfully sent!",
        info: info,
      });
    }
  });
});

module.exports = router;
