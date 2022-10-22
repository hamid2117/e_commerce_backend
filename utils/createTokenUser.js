const createTokenUser = (user) => {
  return { name: user.name, _id: user._id, role: user.role }
}
module.exports = createTokenUser
