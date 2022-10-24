const Review = require('../models/Review')
const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermissions } = require('../utils')

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({}).populate({
    path: 'product',
    select: 'name company price',
  })

  res.status(StatusCodes.OK).json({ reviews, count: reviews.length })
}

const getSingleReview = async (req, res) => {
  const review = await Review.findById(req.params.id)

  if (!review) {
    throw new CustomError.BadRequestError(
      `No review with id : ${req.params.id}`
    )
  }
  res.status(StatusCodes.OK).json({ review })
}

const createReview = async (req, res) => {
  const { product: productId } = req.body

  const isValidProduct = await Product.findById(productId)
  if (isValidProduct) {
    throw new CustomError.NotFoundError(`No product with id :${productId}`)
  }

  const alreadySubmitted = await Review.findOne({
    product: productId,
    user: req.user.userId,
  })
  if (alreadySubmitted) {
    throw new CustomError.BadRequestError(
      `Already submitted review for this product`
    )
  }

  req.body.user = req.user.userId
  const review = await Review.create(req.body)
  res.status(StatusCodes.CREATED).json({ review })
}

const updateReview = async (req, res) => {
  const review = await Review.findById(req.params.id)

  if (!review) {
    throw new CustomError.BadRequestError(
      `No review with id : ${req.params.id}`
    )
  }

  checkPermissions(req.user, review.user)

  review.title = req.body.title
  review.comment = req.body.comment
  review.rating = req.body.rating

  await review.save()

  res.status(StatusCodes.OK).json({ review })
}

const deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id)

  if (!review) {
    throw new CustomError.BadRequestError(
      `No review with id : ${req.params.id}`
    )
  }

  checkPermissions(req.user, review.user)

  review.remove()

  res.status(StatusCodes.OK).json({ msg: 'Review is deleted' })
}

module.exports = {
  getAllReviews,
  getSingleReview,
  createReview,
  updateReview,
  deleteReview,
}
