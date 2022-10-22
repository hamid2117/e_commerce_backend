const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { attachCookiesToResponse, isTokenValid } = require('../utils')
const CustomError = require('../errors')

const register = async (req, res) => {
  const { name, email, password } = req.body

  const role = (await User.countDocuments({})) === 0 ? 'admin' : 'user'

  const user = await User.create({ name, email, password, role })

  const userToken = { name: user.name, _id: user._id, role: user.role }

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
  const isPasswordCorrect = await User.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid password')
  }

  const userToken = { name: user.name, _id: user._id, role: user.role }

  attachCookiesToResponse({ payload: userToken, res })

  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, email: user.email } })
}

const logout = async (req, res) => {
  res.status(StatusCodes.OK).send()
}

module.exports = { register, login, logout }
