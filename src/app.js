const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")

//MiddleWares
app.use(express.json({limit:'10mb'}))
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan("dev"))


module.exports = app