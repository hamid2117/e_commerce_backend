const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide product name'],
      maxLength: [150, 'Name can not be more than 100 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      default: 0,
    },
    description: {
      type: String,
      maxLength: [1200, 'Description can not be more than 1200 characters'],
    },
    image: {
      type: String,
      default: '/uploads/example.jpg',
    },
    category: {
      type: String,
      enum: {
        values: ['cotten', 'loen'],
        message: '{VALUE} is not supported',
      },
    },
    company: {
      type: String,
    },
    colors: {
      type: [String],
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    inventory: {
      //stock
      type: Number,
      required: true,
      default: 2,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: true, toObject: true }
)
// now you able to populate review data in product
productSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product',
  justOne: false,
})

// hook trigger by remove(deleteProduct)...
productSchema.pre('remove', async function (next) {
  await this.model('Review').deleteMany({ product: this._id })
})
module.exports = mongoose.model('Product', productSchema)
