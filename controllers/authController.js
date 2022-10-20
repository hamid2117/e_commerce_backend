const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = (req, res) => {
  res.status(StatusCodes.CREATED).json({})
}
const login = (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const logout = (req, res) => {
  res.status(StatusCodes.OK).send()
}

module.exports = { register, login, logout }
