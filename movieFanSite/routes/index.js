var express = require("express")
var router = express.Router()
const request = require("request")

const apiKey = "1fb720b97cc13e580c2c35e1138f90f8"
const apiBaseUrl = "http://api.themoviedb.org/3"
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`
const imageBaseUrl = "http://image.tmdb.org/t/p/w300"

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl
  next()
})

/* GET home page. */
router.get("/", function (req, res, next) {
  /* request.get takkes 2 args:
      1. it takes the URL to http "get"
      2. the callback to run when done. 3 args:
        1. the error (if any)
        2. the HTTP response
        3. the JSON/data the server sent back */
  request.get(nowPlayingUrl, (error, response, movieData) => {
    // console.log("error:", error)
    // console.log("response:", response)
    // console.log("movieData:", movieData)
    const parsedData = JSON.parse(movieData)
    // res.json(parsedData)
    res.render("index", {
      parsedData: parsedData.results,
    })
  })
})

module.exports = router
