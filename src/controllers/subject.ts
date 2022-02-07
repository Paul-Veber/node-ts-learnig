import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

/**
 * get every subjects in subject
 */

export const read_subject = async (req: Request, res: Response) => {
    const subjects_in_subject = await prisma.subject.findUnique({
        where:
            { id: parseInt(req.params.id) },
    })
    res.json(subjects_in_subject)
}

/**
 * delete a subject
 */

export const delete_subject = async (req: Request, res: Response) => {
    const subject = await prisma.subject.delete({
        where: {
            id: parseInt(req.params.id)
        }
    })
    res.json(subject)
}

/**
 * add subject
 */

export const add_subject = async (req: Request, res: Response) => {
    const subject = await prisma.subject.create({
        data: {
            Name: req.body.name,
            categoryId: req.body.category
        }
    })
    res.json(subject)
}
