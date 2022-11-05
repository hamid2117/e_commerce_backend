const mongoose = require('mongoose')

const TokenSchema = new mongoose.Schema(
  {
    refreshToken: { type: String, required: true },
    ip: { type: String, required: true },
    userAgent: { type: String, required: true },
    isValid: { type: Boolean, default: true },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      requried: true,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('Token', TokenSchema)
