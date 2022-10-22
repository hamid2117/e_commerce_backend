//- [] export (getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword) functions

const User = require('../models/User')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')

const getAllUsers = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}
const getSingleUser = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}
const showCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}
const updateUser = async (req, res) => {
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
