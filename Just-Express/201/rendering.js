const path = require("path")
const express = require("express")
const helmet = require("helmet")
const app = express()

app.use(helmet())

// serve up static files
app.use(express.static("public"))
// parse json and urlencoded dat into req.body
app.use(express.json())
app.use(express.urlencoded())

// app.set(key, value)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// 1. Express as we know it happens. This File.
// 2. We define a view engine.
// - EJS
// - Mustache
// - Handlebars
// - Jade/Pug
// 3. Inside one of our routes we have a res.render
// 4. We pass that res.render 2 things:
// - the file we want to use.
// - the data we want to send to that file.
// 5. Express uses the node module for our specified view engine and parses the file.
// -it takes the HTML/JS/CSS and combines it with whatever is in the file.
// 6. The final result is something the browser can read and display.
app.get("/", (req, res, next) => {
  res.render("index")
})

app.listen(3000)
console.log("Server on port 3000...")
