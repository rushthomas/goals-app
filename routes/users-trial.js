const express = require('express')
const router = express.Router()

router.get('/users-trial', (req, res) => {
  console.log("users trial worked")
  res.send('users trial has worked')
})

module.export = router
