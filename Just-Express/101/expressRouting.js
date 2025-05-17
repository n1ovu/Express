const express = require('express')
const app = express()

// app.all("/", (req, res) => {
//     res.send("<h1>Welcome to the home page!</h1>")
// })

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the home GET page!</h1>")
})

app.post("/", (req, res) => {
    res.send("<h1>Welcome to the home POST page!</h1>")  
})

app.delete("/", (req, res) => {
    res.send("<h1>Welcome to the home DELETE page!</h1>")
})

app.put("/", (req, res) => {
    res.send("<h1>Welcome to the home UPDATE page!</h1>")
})

app.listen(3000)
console.log("The server is listening on 3000")