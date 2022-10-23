const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { attachCookiesToResponse, createTokenUser } = require('../utils')
const CustomError = require('../errors')

const register = async (req, res) => {
  const { name, email, password } = req.body

  const role = (await User.countDocuments({})) === 0 ? 'admin' : 'user'

  const user = await User.create({ name, email, password, role })

  const userToken = createTokenUser(user)

  attachCookiesToResponse({ payload: userToken, res })

  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.name, email: user.email } })
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Crediantials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid password')
  }

  const userToken = createTokenUser(user)

  attachCookiesToResponse({ payload: userToken, res })

  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, email: user.email } })
}

const logout = async (req, res) => {
  res.cookie('accessToken', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).send()
}

module.exports = { register, login, logout }
