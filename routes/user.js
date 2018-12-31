// will contain all of my user related routes
const express = require('express')
const mysql = require('mysql')
const router = express.Router()

var jsonRequestUrl = "https://tranquil-sierra-80677.herokuapp.com/users";

router.get('/messages', (req, res) => {
  console.log("Show some money for this...")
  res.end()
})


router.get("/users", (req, res) => {
    const connection = getConnection()
    const queryString = "SELECT * FROM users"
    connection.query(queryString, (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for users: " + err)
        res.sendStatus(500)
        return
      }

      res.json([rows])
      // res.render('/views/goals')
    })
  })


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'b3ed5dc2546468',
    password: '5083d3fd',
    database: 'heroku_ea05f9a7160123e'
})

  function getConnection() {
    return pool
  }

  router.post('/user_create', (req, res) => {
    console.log("Trying to create a new user...")
    console.log("How do we get the form data???")
    console.log("First name: " + req.body.create_first_name)
    const firstName = req.body.create_first_name
    const lastName = req.body.create_last_name


    const queryString = "INSERT INTO users (first_name, last_name) VALUES (?, ?)"
    getConnection().query(queryString, [firstName, lastName], (err, results, fields) => {
      if (err) {
        console.log("Failed to insert new user: " + err)
        res.sendStatus(500)
        return
      }
      console.log("Inserted a new user with id: ", results.insertID);
      res.end()
    })
  })


router.get('/user/:id', (req, res) => {
    console.log("Fetching user with id: " + req.params.id)

const connection = getConnection()
const userId = req.params.id
const queryString = "SELECT * FROM users WHERE id = ?"

    connection.query(queryString, [userId], (err, rows, fields) => {
        if (err) {
        console.log("Failed to query for users: " + err)
        res.sendStatus(500)
        return
        }

        console.log("I think we fetched users successfully")
        const users = rows.map((row) => {
        return {firstName: row.first_name, lastName: row.last_name}
    })

            res.json(users)
        })
})


module.exports = router
