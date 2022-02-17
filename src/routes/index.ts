import { Router, Request, Response } from "express"
import { login_page_info, user_login_page } from "../controllers/user"
import { Login } from "../codec/form_validation"
import * as controller from "../controllers/index"
import { validator } from "../middlewares/form_validator"

export const index = Router()

index.get("/", controller.index)

// User
index.get("/user/login", user_login_page)

index.post("/user/login", validator(Login, login_page_info), (req, res, next) => {
    return res.status(301).send({ status: 'success', data: req.body })
})