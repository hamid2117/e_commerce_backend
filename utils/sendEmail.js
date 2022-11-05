const sgMail = require('@sendgrid/mail')
const nodemailer = require('nodemailer')

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'carissa.stiedemann@ethereal.email',
      pass: 'yvyZ5uY581CmSWZEKc',
    },
  })
  let info = await transporter.sendMail({
    from: "'hamid mehmood' <hamidmehmood@gmail.com>",
    to: 'bar@example.com',
    subject: 'programmer',
    text: 'salam',
    html: '<h2>salam tori </h2>',
  })

  res.status(200).json({ info })
}

const sendEmail = async ({ to, subject, html }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const mailToSend = {
    from: 'hamidmehmood2121@gmail.com',
    to,
    subject,
    html,
  }
  const info = await sgMail.send(mailToSend)
  return info
}

module.exports = sendEmail
