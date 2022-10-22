const express = require('express')
const router = express.Router()
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../controllers/userController')

router.get('/', getAllUsers)

//if you  set simple path below query include path then there is an error. so params path always in last.bcs there is only / .if there is /user/ then there is no problem.
router.get('/showMe', showCurrentUser)
router.patch('/updateUser', updateUser)
router.patch('/updateUserPassword', updateUserPassword)

router.get('/:id', getSingleUser)

module.exports = router
