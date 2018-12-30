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
  res.send("You have found the root route")
})






//calling the goals.ejs page to be rendered at /users
app.get('/users', function(req, res) {
    res.render('/views/goals');
});





const PORT = process.env.PORT || 3002
// localhost:PORT
app.listen(PORT, () => {
  console.log("Server for the app is up and listening on: ${PORT}")
})
