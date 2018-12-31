const express = require('express')
const mysql = require('mysql')
const router = express.Router()

router.get('/trial-users', (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM users"
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
    }
      res.json([rows])
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


module.export = router
