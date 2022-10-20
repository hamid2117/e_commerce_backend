require('dotenv').config()
require('express-async-errors')

//express
const express = require('express')
const app = express()

//database
const connectDB = require('./db/connect')

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/not-found')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h2>Welcome to ecommerce website')
})
//app.use('/api/v1')

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
