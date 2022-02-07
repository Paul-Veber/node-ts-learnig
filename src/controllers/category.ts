import { Post, PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

/**
 * get every subjects in category
 */

export const read_category = async (req: Request, res: Response) => {
    const subjects_in_category = await prisma.subject.findMany({
        where:
            { categoryId: parseInt(req.params.id) },
    })
    res.json(subjects_in_category)
}

/**
 * delete a category
 */

export const delete_category = async (req: Request, res: Response) => {
    const category = await prisma.category.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(category)
}

/**
 * add category
 */

export const add_category = async (req: Request, res:Response) => {
    const category = await prisma.category.create({
           data: {
               Name: req.body.name
           }
    })
    res.json(category)
}
