require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
//database
const connectDB = require('./db/connect')

app.get('/', (req, res) => {
  res.send('<h2>Welcome to ecommerce website')
})
//app.use('/api/v1')

const Port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGODBDEV)
    app.listen(Port, console.log(`Server is listening on port : ${Port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
