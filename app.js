//load our app server using express
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))
app.use(morgan('short'))

const router = require('./routes/user.js')

app.use(router)


app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from ROOOOOOT")
})

// localhost:3002
// testing git
app.listen(3002, () => {
  console.log("Server for the app is up and listening on 3002...")
})