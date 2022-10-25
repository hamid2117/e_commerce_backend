const Order = require('../models/Order')
const Product = require('../models/Product')
const CustomError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { checkPermissions } = require('../utils')

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
  const { items: cartItems, tax, shippingFee } = req.body

  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('No cart items provided')
  }

  if (!cartItems || cartItems.length < 1) {
    throw new CustomError.BadRequestError('Please provide tax and shipping fee')
  }
  let orderItems = []
  let subTotal = 0

  for (const item of cartItems) {
    const dbProduct = await Product.findById(item.product)
    if (!dbProduct) {
      throw new CustomError.NotFoundError(
        `No product with id : ${item.product}`
      )
    }
    const { price, image, name, _id } = dbProduct
    const singleOrderItem = {
      amount: item.amount,
      price,
      image,
      name,
    }
    orderItems = [...orderItems, singleOrderItem]
    subTotal += item.amount * price
  }

  console.log(orderItems)
  console.log(subTotal)

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
