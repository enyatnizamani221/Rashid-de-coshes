import nodemailer from "nodemailer";

export default async function handler(req, res){
  if(req.method === "POST"){
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "rashid.official.nizamani@gmail.com",
        pass: "Rashid 326"
      }
    });

    try {
      await transporter.sendMail({
        from: `${name} <${email}>`,
        to: "rashid.official.nizamani@gmail.com",
        subject: "Rashid",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      });
      res.status(200).json({ message: "Email sent successfully!" });
    } catch(err) {
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
