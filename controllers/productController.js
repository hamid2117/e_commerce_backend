const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')

// Remember all queries like sort etc
const getAllProducts = async (req, res) => {
  const products = await Product.find({})

  res.status(StatusCodes.OK).json({ products })
}

const getSingleProduct = async (req, res) => {
  const { id: productId } = req.params
  const product = await Product.findById(productId)

  if (!product) {
    throw new CustomError.BadRequestError(`No product with id :${productId}`)
  }

  res.status(StatusCodes.OK).json({ product })
}

const createProduct = async (req, res) => {
  req.body.user = req.user.userId
  const product = await Product.create(req.body)

  res.status(StatusCodes.CREATED).json({ product })
}

const updateProduct = async (req, res) => {
  const { id: productId } = req.params

  const product = await Product.findByIdAndUpdate(productId, req.body, {
    runValidators: true,
    new: true,
  })

  if (!product) {
    throw new CustomError.BadRequestError(`No product with id :${productId}`)
  }

  res.status(StatusCodes.OK).json({ product })
}

const deleteProduct = async (req, res) => {
  const { id: productId } = req.params

  const product = await Product.findById(productId)

  if (!product) {
    throw new CustomError.BadRequestError(`No product with id :${productId}`)
  }

  await product.remove()

  res.status(StatusCodes.OK).json({ msg: 'Product is delete' })
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
