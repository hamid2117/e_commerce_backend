require('dotenv').config()
require('express-async-errors')

//express
const express = require('express')
const app = express()

//otherPackages
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')

//routers
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const reviewRouter = require('./routes/reviewRoutes')

//database
const connectDB = require('./db/connect')

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())
app.use(morgan('tiny'))
app.use(cookieParser(process.env.JWT_SECRET))
app.use(cors()) // to access api all domain not only same domain for example in node :5000 and react:3000
app.use(express.static('./public'))
app.use(fileUpload())

//

app.get('/', (req, res) => {
  console.log(req.signedCookies)
  res.send('<h2>Welcome to ecommerce website</h2>')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/reviews', reviewRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const Port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGODBDEV)
    app.listen(Port, console.log(`Server is listening on port : ${Port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
