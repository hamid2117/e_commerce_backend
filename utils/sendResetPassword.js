const sendEmail = require('./sendEmail')

const sendResetPasswordEmail = async ({ name, email, token, origin }) => {
  const resetURL = `${origin}/user/reset-password?token=${token}&email=${email}`
  const message = `<p>Please reset Password by clicking on the following link : <a href="${resetURL}">Reset Password</a> </p>`

  await sendEmail({
    subject: `Reset Password `,
    html: `<h4>Hello ${name} </h4> ${message}`,
    to: email,
  })
}

module.exports = sendResetPasswordEmail
