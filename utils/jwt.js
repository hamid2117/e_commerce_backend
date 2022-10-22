const jwt = require('jsonwebtoken')

const createJwt = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })

  return token
}

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET)

const attachCookiesToResponse = ({ payload, res }) => {
  const token = createJwt({ payload })

  //cookie

  const oneDay = 1000 * 60 * 60 * 24
  res.cookie('accessToken', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  })
}

module.exports = { createJwt, isTokenValid, attachCookiesToResponse }
