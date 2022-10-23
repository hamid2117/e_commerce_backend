const Review = require('../models/Review')
const { StatusCodes } = require('http-status-codes')

const getAllReviews = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const getSingleReview = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const createReview = async (req, res) => {
  res.status(StatusCodes.CREATED).json({})
}

const updateReview = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

const deleteReview = async (req, res) => {
  res.status(StatusCodes.OK).json({})
}

module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
}
