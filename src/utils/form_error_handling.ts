import { Errors } from "io-ts"
import { Response } from "express"

export const codec_error = <T>(input: T, message: string) => input === undefined ? "Ce champ est obligatoire" : message 

export const form_error_message = (errors: Errors) => {
    const generic_message = "Internal error" 
    return errors ? errors.map((error) => error.message) : generic_message
}

export const form_error_handling = (errors: Errors, view: string, res: Response) =>{
   res.render(view, {errors: form_error_message(errors)}) 
}