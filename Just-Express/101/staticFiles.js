const express = require('express')
const app = express()

// app has a use() method for middleware, (css, html, images, js, etc.)
app.use(express.static('public'))

app.listen(3000)
console.log("Server listening port 3000...")