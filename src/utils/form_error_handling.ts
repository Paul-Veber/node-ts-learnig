import { Errors, ValidationError } from "io-ts"
import { Response } from "express"
import { register_page_info } from "../controllers/user"
import { PageInformations } from "./types"
import { isString } from "fp-ts/lib/string"
import { array, number } from "fp-ts"

export const codec_error = <T>(input: T, message: string) => input === undefined ? "Ce champ est obligatoire" : message

export const field_error = <T>(input: T, field_name: string) => {
    return typeof isString(input) ? { [field_name]: input } : input
}

const error_format = (error: ValidationError) => {
    const key = error.context[1].key
    const message = error.message
    return { [key]: message }
}

const convertArrayToObject = (array: Array<{[x: string]: string}>) =>
    array.reduce(
        (obj, item) => ({
            ...obj,
            [item.key]: item.value
        }),
        {}
    )

export const form_error_message = (errors: Errors) => {
    const generic_message = "Internal error"
    console.log(errors.map((error) => error_format(error)))
    return errors ? Object.assign({},...errors.map((error) => error_format(error))) : generic_message
}

export const form_error_handling = (errors: Errors, page_information: PageInformations, res: Response) => {
    res.render("index", { ...page_information, ...{ errors: form_error_message(errors) } })
}
