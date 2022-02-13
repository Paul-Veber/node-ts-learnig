import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { fetch_user_name } from "../service/auth"

const prisma = new PrismaClient()

