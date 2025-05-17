const path = require("path")

const express = require("express")
const app = express()

const helmet = require("helmet")
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(3000)
