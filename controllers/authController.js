const User = require('../models/User')
const CustomError = require('../errors')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const { name, email, password } = req.body

  const role = (await User.countDocuments({})) === 0

  const user = await User.create({ name, email, password })
  const userToken = { name: user.name, _id: user._id, role: user.role }

  const token = jwt.sign(userToken, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })

  res.status(StatusCodes.CREATED).json({ ...user })
}
const login = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const logout = async (req, res) => {
  res.status(StatusCodes.OK).send()
}

module.exports = { register, login, logout }
