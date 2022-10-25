const express = require('express')
const router = express.Router()

const { authorizePermissions } = require('../middleware/authentication')

const {
  createOrder,
  getAllOrders,
  getCurrentUserOrders,
  getSingleOrder,
  updateOrder,
} = require('../controllers/orderController')

router
  .route('/')
  .post(createOrder)
  .get(authorizePermissions('admin'), getAllOrders)

router.route('/showAllMyOrders').get(getCurrentUserOrders)
router.route('/:id').get(getSingleOrder).patch(updateOrder)

module.exports = router
