const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const register = async (req, res) => {
  const { name, email, password } = req.body

  const role = (await User.countDocuments({})) === 0

  res.status(StatusCodes.CREATED).json({ name, email, password, role })
}
const login = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const logout = async (req, res) => {
  res.status(StatusCodes.OK).send()
}

module.exports = { register, login, logout }
