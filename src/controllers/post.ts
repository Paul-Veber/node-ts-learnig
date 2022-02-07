
import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

/**
 * get every post
 */

export const read_post = async (req: Request, res: Response) => {
    const post = await prisma.post.findUnique({
        where:
            { id: parseInt(req.params.id) },
    })
    res.json(post)
}

/**
 * delete a post
 */

export const delete_post = async (req: Request, res: Response) => {
    const post = await prisma.post.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(post)
}

/**
 * add post
 */

export const add_post = async (req: Request, res: Response) => {
    const post = await prisma.post.create({
        data: {
            title: req.body.name,
            message: req.body.message,
            subjectId: req.body.subject,
        }
    })
    res.json(post)
}
