const { createJWT, isTokenValid, attachCookiesToResponse } = require('./jwt')
const createTokenUser = require('./createTokenUser')
const checkPermissions = require('./checkPermissions')
const sendEmail = require('./sendEmail')
const verificationEmail = require('./verificationEmail')
const sendResetPasswordEmail = require('./sendResetPassword')
const createHash = require('./createHash')

module.exports = {
  createHash,
  sendResetPasswordEmail,
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createTokenUser,
  sendEmail,
  verificationEmail,
  checkPermissions,
}
