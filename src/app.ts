import express from "express"
import logger from "morgan"
import * as path from "path"
import cookieParser from "cookie-parser"
import sessions from 'express-session'

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler"

// Routes
import { index } from "./routes/index"
// Create Express server
export const app = express()

// Add json suport for post
app.use(express.json())

// Add cookie parser
app.use(cookieParser())

// Express Session
require('dotenv').config();

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: process.env.SECRET_KEY,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

// Express configuration
app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname, "../views"))
// templating engine
app.engine('ejs', require('ejs').renderFile)
app.set("view engine", "ejs")

app.use(logger("dev"))

app.use(express.static(path.join(__dirname, "../public")))
app.use(express.static(path.join(__dirname, "./public")))
app.use("/", index)

app.use(errorNotFoundHandler)
app.use(errorHandler)
