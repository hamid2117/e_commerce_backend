//- [] export (getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword) functions

const User = require('../models/User')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')

const getAllUsers = async (req, res) => {
  const users = await User.find({ role: 'user' }).select('-password')

  res.status(StatusCodes.OK).json({ users })
}
const getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')
  if (!user) {
    throw new CustomError.NotFoundError(`No User with id of ${req.params.id}`)
  }

  res.status(StatusCodes.OK).json({ user })
}
const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}
const updateUser = async (req, res) => {
  const {} = req.body
  res.status(StatusCodes.OK).json({})
}

const updateUserPassword = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
}
