const jwt = require('jsonwebtoken')

const createJwt = ({ payload }) => {
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    process.env.JWT_LIFETIME
  )
}

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET)

module.exports = { createJwt, isTokenValid }
