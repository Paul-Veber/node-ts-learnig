import { PrismaClient } from "@prisma/client"

import { getHashedPassword } from "../utils/hash_password"
const prisma = new PrismaClient()

export const fetch_user_name = async (user_name: string, user_password: string) => {
    return await prisma.user.findFirst({
        where: {
            name: user_name,
            password: getHashedPassword(user_password)
        }
    }
    )
}

