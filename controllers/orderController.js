const Order = require('../models/Order')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')

const getAllOrders = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const getSingleOrder = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}
const getCurrentUserOrders = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}
const createOrder = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}
const updateOrder = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
}
