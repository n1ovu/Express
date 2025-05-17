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

function validateUser(req, res, next) {
  res.locals.validated = true
  next()
}

app.use(validateUser)

app.get("/", (req, res, next) => {
  res.render("index", {
    msg: "Failure!",
    msg2: "Success!",
    html: "<p><img src='node.png' style='width:150px' /></p>",
  })
})

app.listen(3000)
