const path = require("path")

const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")

const helmet = require("helmet")
app.use(helmet())

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res, next) => {
  res.send("Sanity Check")
})

app.use((req, res, next) => {
  if (req.query.msg === "fail") {
    res.locals.msg = `Sorry. This username/password combination does not exist.`
  } else {
    res.locals.msg = ``
  }

  // send me on to the next piece of middleware.
  next()
})

app.get("/login", (req, res, next) => {
  // The req object has a query property in express.
  // console.log(req.query)
  res.render("login")
})

app.post("/process_login", (req, res, next) => {
  // req.body is made by urlencoded, which parses the http message for sent data.
  const password = req.body.password
  const username = req.body.username
  // check the db to see if user credentials are valid.
  // if valid is true.
  // - save their username in a cookie
  // - send them to the welcome page
  if (password === "x") {
    // res.cookie takes at least 2 args.
    // 1. name of the cookie.
    // 2. the value to set it too.
    res.cookie("username", username)
    // res.redirect takes 1 arg.
    // - Where to send the browser.
    res.redirect("/welcome")
  } else {
    // The "?" is a special character in a url.
    res.redirect("/login?msg=fail&test=hello")
  }
  // res.json(req.body)
})

app.get("/welcome", (req, res, next) => {
  // req.cookies object will have a property for every named cookie that has been set
  res.render("welcome", {
    username: req.cookies.username,
  })
})

app.get("/logout", (req, res, next) => {
  // res.clearCookie takes 1 arg, cookie to clear by name.
  res.clearCookie("username")
  res.redirect("/login")
})

app.listen(3000)
console.log("Server listening on port 3000...")
