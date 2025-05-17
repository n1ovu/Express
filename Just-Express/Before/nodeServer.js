// http is native to node.js
const http = require('http')

// fs = file system module built into node, gives access to files on this
// computer
const fs = require('fs')

// the http module ha a createServer method that one argument
// 1. callback, callback takes two args: req, res
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // console.log(req)
        // res = our way to respond to the requester
        // 1. start-line node takes care of
        // 2. header
        // 3. body
        // writeHead() takes 2 args: status code, object: mime-type
        res.writeHead(200, {'content-type': 'text/html'})
        const homePageHTML = fs.readFileSync('node.html')
        res.write(homePageHTML)
        res.end()
    }else if (req.url === '/my-logo.png') {
        res.writeHead(200, {'content-type': 'image/png'})
        const myLogo = fs.readFileSync('my-logo.png')
        res.write(myLogo)
        res.end()
    }else if (req.url === "/style.css") {
        res.writeHead(200, {'content-type': 'text/css'})
        const style = fs.readFileSync('style.css')
        res.write(style)
        res.end()
    }else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(`<h4>Sorry, this is not the page you want.</h4>`)
        res.end()
    }
})

// createServer returns an object with a listen method, listen take one arg
// 1. port to listen on
server.listen(3000)