const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "benaichataysir9@gmail.com",
    pass: "MyPassword",
  },
});

const mailOptions = {
  from: "benaichataysir9@gmail.com",
  to: "tayssir.benaicha@outlook.com",
  subject: "Test Email",
  text: "This is a test email from Node.js",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});

