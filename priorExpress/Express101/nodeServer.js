const http = require("http")

const fs = require("fs")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" })
    // res.write("")
    const homePageHtml = fs.readFileSync("node.html")
    res.write(homePageHtml)
    // console.log(homePageHtml)
    res.end()
  } else if (req.url === "/node-js-logo.png") {
    res.writeHead(200, { "content-type": "image/png" })
    const image = fs.readFileSync("node-js-logo.png")
    res.write(image)
    res.end()
  } else if (req.url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" })
    const css = fs.readFileSync("style.css")
    res.write(css)
    res.end()
  } else {
    res.writeHead(404, { "content-type": "text/html" })
    res.write("<h3>Sorry, this is not the page you are looking for!</h3>")
    res.end()
  }
})

server.listen(3000)
