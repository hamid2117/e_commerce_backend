const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title of the review is required'],
      trim: true,
      maxlength: 100,
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Please provide rating'],
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  },
  { timestamps: true }
)

reviewSchema.index({ product: 1, user: 1 }, { unique: true })

module.exports = mongoose.model('Review', reviewSchema)
