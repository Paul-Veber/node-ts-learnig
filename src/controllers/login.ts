import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { body, validationResult } from "express-validator"
import { fetch_user_name } from "../service/auth"

const prisma = new PrismaClient()

export const login = (req:Request, res: Response) => {
   const user_name = body('name', 'Nom vide').trim().isLength({min:1}).escape()
   const user_password = body('password', 'Mot de passe vide').trim().isLength({min:1}).escape()
   
   
}