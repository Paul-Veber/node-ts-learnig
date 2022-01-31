import { Request, Response } from "express"

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {
    res.render("index", { 'page': 'pages/todo_list.ejs', 'title': 'Todo_List', 'test': 'bla' })
}
