const express = require('express')
const router = express.Router()

const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication')

const {
  createOrder,
  getAllOrders,
  getCurrentUserOrders,
  getSingleOrder,
  updateOrder,
} = require('../controllers/orderController')

router
  .route('/')
  .get(authenticateUser, getCurrentUserOrders)
  .post(authenticateUser, createOrder)
  .get([authenticateUser, authorizePermissions('admin')], getAllOrders)

router.route('/:id').get(authenticateUser, getSingleOrder).patch(updateOrder)

module.exports = router
