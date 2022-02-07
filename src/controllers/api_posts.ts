import { Request, Response } from "express"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * get every post
 */
export const browse_posts = async (req: Request, res: Response) => {
    const all_posts = await prisma.post.findMany()
    console.log(all_posts)
    res.json(all_posts)
}

/**
 * get one post
 */
export const read_posts = async (req: Request, res: Response) => {
    const post = await prisma.post.findUnique({
        where:
            { id: parseInt(req.params.id) },
    })
    res.json(post)
}

/**
 * add post in DB
 */
export const add_post = async (req: Request, res: Response) => {
    const errors = validationResult(req)
    console.log(req.body)
    if (!errors.isEmpty()) {
        console.log(errors)
    } else {
        const post = await prisma.post.create({
            data: {
                title: req.body.title,
                message: req.body.message,
                author: req.
            }
        })
        res.json(post)
    }
}

/**
 * edit one post
 */
export const edit_post = async (req: Request, res: Response) => {
    const title = req.body.title
    const message = req.body.description
    const edit = await prisma.post.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: {
            title: title != null ? title : undefined,
            message: message != null ? message : undefined,
            updatedAt: new Date(Date.now())
        }
    })
    res.json(edit)
}

/**
 * delete one post
 */
export const delete_post = async (req: Request, res: Response) => {
    const { id } = req.params
    const post = await prisma.post.delete({
        where: {
            id: Number(id),
        },
    })
    res.json(post)
}