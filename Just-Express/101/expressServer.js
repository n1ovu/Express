//  NODE JS is the langauge and express is a node.js module
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.all("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/node.html"))
})

app.listen(3000)
console.log("The server is listening on port 3000")