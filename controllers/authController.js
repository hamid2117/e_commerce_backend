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
  res.status(StatusCodes.OK).json({})
}

const logout = async (req, res) => {
  res.status(StatusCodes.OK).send()
}

module.exports = { register, login, logout }
