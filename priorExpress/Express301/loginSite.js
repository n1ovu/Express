const path = require("path")
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
app.use(helmet())

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use((req, res, next) => {
  if (req.query.msg === "fail") {
    res.locals.msg =
      "Sorry. This username and password combination does not exist."
  } else {
    res.locals.msg = ""
  }
  // send me to the next piece of middleware
  next()
})

app.get("/", (req, res, next) => {
  res.send("Sanity check!")
})

app.get("/login", (req, res, next) => {
  //the query string is where you put insecure data
  // console.log(req.query)
  res.render("login")
})

app.post("/process_login", (req, res, next) => {
  const password = req.body.password
  const username = req.body.username

  if (password === "x") {
    res.cookie("username", username)
    res.redirect("/welcome")
  } else {
    res.redirect("/login?msg=fail&test=hello")
  }
  // res.json(req.body)
})

app.get("/welcome", (req, res, next) => {
  res.render("welcome", {
    username: req.cookies.username,
  })
})

app.get("/story/:storyId", (req, res, next) => {
  // the req.params object always exists.
  // it will have a property for each wildcard in the route.
  res.send(`<h1>Story ${req.params.storyId}</h1>`)
})

app.get("/story/:storyId/:link", (req, res, next) => {
  // the req.params object always exists.
  // it will have a property for each wildcard in the route.
  res.send(`<h1>Story ${req.params.storyId} - ${req.params.link}</h1>`)
})

app.get("/statement", (req, res, next) => {
  // this will renderthe statement in the browser
  // res.sendFile(path.join(__dirname, "userStatements/BankStatementChequing.png"))
  // app has a download method that will download the file
  // it takes 2 args: the name of the file and the name of the file the user will see
  res.download(
    path.join(__dirname, "userStatements/BankStatementChequing.png"),
    "joesStatement.png"
  )
})

app.get("/logout", (req, res, next) => {
  res.clearCookie("username")
  res.redirect("/login")
})

app.listen(3000)
console.log("Server listening on port 3000...")
