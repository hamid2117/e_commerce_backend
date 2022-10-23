const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title of the review is required'],
    maxlength: 100,
  },
  comment: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('Review', reviewSchema)
