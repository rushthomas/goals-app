const express = require('express')
const router = express.Router()

router.get('/trial-users', (req, res) => {
  console.log("users trial worked")
  res.end()
})

module.export = router
