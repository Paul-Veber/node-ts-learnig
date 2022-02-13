import { RequestHandler } from 'express'
import { pipe } from 'fp-ts/lib/function'
import { fold } from 'fp-ts/lib/Either'
import { ParamsDictionary } from 'express-serve-static-core'
import { Props, TypeC } from 'io-ts'
import { form_error_handling } from '../utils/form_error_handling'

export const validator: <T>(decoder: TypeC<Props>, view:string) => RequestHandler<ParamsDictionary, any, T> = (decoder) => (req, res, next) => {
    return pipe(
        decoder.decode(req.body),
        fold(
            (errors) => form_error_handling(errors, view, res),
            () => next(),
        ),
    )
}