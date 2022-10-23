const { StatusCodes } = require('http-status-codes')

const getAllProducts = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const getSingleProduct = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const createProduct = async (req, res) => {
  res.status(StatusCodes.CREATED).json({})
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
