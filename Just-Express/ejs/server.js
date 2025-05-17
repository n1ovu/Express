const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(bodyParser())
app.use(cors())

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", {
    people: [{ name: "Dave" }, { name: "Jerry" }],
  })
})

app.listen(3000)
console.log("The server is listening on port 3000...")
