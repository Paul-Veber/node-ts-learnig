import { Router } from "express"
import { Post, Register_form } from "../codec/form_validation"
import * as controller from "../controllers/index"
import * as post from "../controllers/post"
import { validator } from "../middlewares/form_validator"

export const index = Router()

index.get("/", controller.index)

// post 
index.post("/user/create", validator(Register_form, "pages/login.ejs"), (req, res, next)=> {
    return res.status(301).send({status: 'success', data: req.body})
})