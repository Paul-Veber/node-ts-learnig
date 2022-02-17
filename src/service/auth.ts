import { PrismaClient } from "@prisma/client"
import { left, right } from "fp-ts/lib/Either"

import { getHashedPassword } from "../utils/hash_password"
const prisma = new PrismaClient()

export interface LoginData {
    email: string,
    password: string
}

export const fetch_user_name = async (data: LoginData) => {
    const { email, password } = data
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })
    if (!user) return left(new Error("Aucun utilisateur avec cet email"))
    return getHashedPassword(password) === user.password ?
        right("sucess") :
        left("Mauvais mot de passe")

}

