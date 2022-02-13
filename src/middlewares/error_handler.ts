import { NextFunction, Request, Response } from "express"
import createError from "http-errors"

declare type web_error = Error & { status?: number }
export const error_handler = (err: web_error, req: Request, res: Response, next: NextFunction): void => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render("error", { title: err.name, message: err.message })
}

export const error_not_found_handler = (req: Request, res: Response, next: NextFunction): void => {
    next(createError(404))
}
