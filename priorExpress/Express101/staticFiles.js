const path = require("path")
const express = require("express")
const app = express()
app.use(express.static("public"))

app.all("/", (req, res) => {
  console.log(path.join(__dirname + "/node.html"))
  res.sendFile(path.join(__dirname + "/node.html"))
})

app.all("*", (req, res) => {
  res.end(`<h1>Sorry, this page does not exist!</h1>`)
})

app.listen(3000)
console.log("Server is listening on port 3000...")
