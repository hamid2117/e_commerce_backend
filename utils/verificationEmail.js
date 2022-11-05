const sendEmail = require('./sendEmail')
const verificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}/user/verify-token?token=${verificationToken}&email=${email}`
  const message = `<p>Please confirm your email by clicking on the following link: <a href="${verifyEmail}">Verify Email</a> </p>`

  return sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h4>Hello ${name}</h4>
    <br/>
  ${message}`,
  })
}
module.exports = verificationEmail
