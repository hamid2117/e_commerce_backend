const express = require('express')
const router = express.Router()
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController')

router.route('/').get(getAllUsers).get(showCurrentUser)
router
  .route('/:id')
  .get(getSingleUser)
  .patch(updateUser)
  .patch(updateUserPassword)

module.exports = router
