import { Request, Response } from "express"
import { PrismaClient } from '@prisma/client'
import { body, validationResult } from "express-validator"

const prisma = new PrismaClient()

/**
 * get every task
 */
export const browse_tasks = async (req: Request, res: Response) => {
    const all_tasks = await prisma.task.findMany()
    console.log(all_tasks)
    res.json(all_tasks)
}

/**
 * get one task
 */
export const read_tasks = async (req: Request, res: Response) => {
    const task = await prisma.task.findUnique({
        where:
            { id: parseInt(req.params.id) },
    })
    res.json(task)
}

/**
 * add task in DB
 */
export const add_task = async (req: Request, res: Response) => {
    const errors = validationResult(req)
    console.log(req.body)
    if (!errors.isEmpty()) {
        console.log(errors)
    } else {
        const task = await prisma.task.create({
            data: {
                title: req.body.title,
                description: req.body.description,
            }
        })
        res.json(task)
    }
}

/**
 * edit one task
 */
export const edit_task = async (req: Request, res: Response) => {
    const title = req.body.title
    const description = req.body.description
    const edit = await prisma.task.update({
        where: {
            id: parseInt(req.params.id),
        },
        data: {
            title: title != null ? title : undefined,
            description: description != null ? description : undefined,
            updated_at: new Date(Date.now())
        }
    })
    res.json(edit)
}

/**
 * delete one task
 */
export const delete_task = async (req: Request, res: Response) => {
    const { id } = req.params
    const task = await prisma.task.delete({
        where: {
            id: Number(id),
        },
    })
    res.json(task)
}