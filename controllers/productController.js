const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

const getAllProducts = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const getSingleProduct = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const createProduct = async (req, res) => {
  req.body.user = req.user.userId
  const product = await Product.create(req.body)

  res.status(StatusCodes.CREATED).json({ product })
}

const updateProduct = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const deleteProduct = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const uploadImage = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
}
