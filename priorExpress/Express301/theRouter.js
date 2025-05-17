const express = require("express")
let router = express.Router()

router.get("/", (req, res, next) => {
  res.json({ message: "Hello from the router!" })
})

module.exports = router
