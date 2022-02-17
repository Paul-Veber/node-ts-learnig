import { PrismaClient} from "@prisma/client"
import { Request, Response } from "express"
import { PageInformations } from "../utils/types"

const prisma = new PrismaClient()

export const register_page_info: PageInformations = { "page": "pages/register.ejs", "title": "register" }
export const login_page_info: PageInformations = { "page": "pages/login.ejs", "title": "login" }

export const user_login_page = async (req: Request, res: Response) => res.render("index", {...login_page_info, 'errors':''})
export const user_login_form = async (req:Request, res:Response) => {
    
}

export const user_register_page = async (req: Request, res: Response) => res.render("index", register_page_info)
export const user_register_form = async (req: Request, res: Response) => {
        const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    })
    res.render("index",{...login_page_info, "errors":""})
}