const { isTokenValid } = require('../utils')
const CustomError = require('../errors')

const authenticateUser = (req, res, next) => {
  const token = req.signedCookies.token

  if (!token) {
    throw new CustomError.UnauthenticatedError('Anauthorized User')
  }
  try {
    const { name, userId, role } = isTokenValid({ token })
    req.user = { name, userId, role }
    next()
  } catch (error) {
    throw new CustomError.UnauthenticatedError('Anauthorized User')
  }
}

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      throw new CustomError.UnAuthorizedError(
        'You are UnAuthorized to acces this route'
      )
    }
    next()
  }
}

module.exports = {
  authenticateUser,
  authorizePermissions,
}
