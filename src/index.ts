import { ServerResponse } from "http"
import express, { Request, Response } from "express"
import path from 'path'
import { body, validationResult } from "express-validator"

const app = express()
const port = 8080 // default port to listen

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')))

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'))

// Set view engine as EJS
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!")
})
app.get("/hellourl/:name", function (req: Request, res: Response) {
    let name: string = req.params.name
    res.send(`Hello ${name}`)
})
app.get("/helloform", function (req: Request, res: Response) {
    res.render('pages/hello_form.ejs')
})
app.post("/helloform", function (req: Request, res: Response) {
    console.log(req.body)
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(errors)
    } else {
        let user_name = req.body.name
        res.render('pages/hello_form.ejs', { 'user_name': user_name })
    }
})

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
