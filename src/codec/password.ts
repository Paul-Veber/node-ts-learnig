import * as io from 'io-ts'
import { withMessage } from 'io-ts-types'
import { codec_error } from '../utils/form_error_handling'

interface NonEmptyPassword50Brand {
    readonly NonEmptyPassword50: unique symbol
}

export const Non_empty_password_50 = withMessage(
    io.brand(
        io.string,
        (s: string): s is io.Branded<string, NonEmptyPassword50Brand> => s.length > 8 && s.length <= 50,
        'NonEmptyPassword50'
    ), input => codec_error(input,`${input} n'est pas entre 8 et 50 characters`))

export type Password = io.TypeOf<typeof Non_empty_password_50>
