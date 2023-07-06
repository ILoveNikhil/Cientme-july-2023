const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    // host: process.env.SMPT_HOST,
    // port: process.env.SMPT_PORT,
    // auth: {
    //   user: "process.env.SMPT_MAIL",
    //   pass: "process.env.SMPT-PASSWORD",
    // },
    // service: process.env.SMPT_SERVICE,
    // host: "smtp.mailtrap.io",
    // port: 2525,

    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "02b10fc3f27603",
      pass: "42eb74f9188c06",
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
