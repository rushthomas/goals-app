const express = require('express')
const router = express.Router()

router.get('/users-trial', (req, res) => {
  console.log("users trial worked")
  res.end()
})

module.export = router
