require('dotenv').config()
require('express-async-errors')
const path = require('path')
//express
const express = require('express')
const app = express()

//otherPackages
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const cors = require('cors')
const rateLimiter = require('express-rate-limit')
const helmet = require('helmet')
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')

//routers
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const productReview = require('./routes/reviewRoutes')
const orderRouter = require('.//routes/orderRoutes')

//database
const connectDB = require('./db/connect')

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const { authenticateUser } = require('./middleware/authentication')

//rateLimiter
app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
)

app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

app.use(express.json())
app.use(morgan('tiny'))
app.use(cookieParser(process.env.JWT_SECRET))
app.use(cors()) // to access api all domain not only same domain for example in node :5000 and react:3000

app.use(express.static(path.resolve(__dirname, './public')))
app.use(fileUpload())

//

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/reviews', productReview)
app.use('/api/v1/orders', authenticateUser, orderRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const Port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(Port, console.log(`Server is listening on port : ${Port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
