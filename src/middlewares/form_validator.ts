import { RequestHandler } from 'express'
import { pipe } from 'fp-ts/lib/function'
import { fold } from 'fp-ts/lib/Either'
import { ParamsDictionary } from 'express-serve-static-core'
import { Errors, Props, TypeC } from 'io-ts'
import { form_error_handling } from '../utils/form_error_handling'
import { PageInformations } from '../utils/types'

export const validator: <T>(decoder: TypeC<Props>, page_information:PageInformations) => RequestHandler<ParamsDictionary, any, T> = (decoder, page_information) => (req, res, next) => {
    console.log(decoder.name)
    return pipe(
        decoder.decode(req.body),
        fold(
            (errors) => form_error_handling(errors, page_information, res),
            () => next(),
        ),
    )
}