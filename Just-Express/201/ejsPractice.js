const path = require("path")
const express = require("express")
const helmet = require("helmet")
const app = express()

app.use(helmet())
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

// serve up static files
app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

function validateUser(req, res, next) {
  // validated logic
  res.locals.validated = true
  next()
}

app.use(validateUser)

app.get("/", (req, res, next) => {
  // The data in the 2nd arg is going to be appended to res.locals
  res.render("index", {
    title: "Home",
    msg: "Success!",
    msg2: "Failure",
    // HTML came from the DB and we want to drop it into the template.
    html: `<p><img src="C:\Users\N1OVU\OneDrive\Pictures\Logo\FullLogo (1).jpg"/></p>`,
  })
})

app.listen(3000)
console.log("Server on port 3000...")
