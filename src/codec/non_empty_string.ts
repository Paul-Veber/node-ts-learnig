import { pipe } from 'fp-ts/lib/function'
import * as io from 'io-ts'
import { withMessage } from 'io-ts-types'
import { codec_error, field_error } from '../utils/form_error_handling'

interface NonEmptyString50Brand {
    readonly NonEmptyString50: unique symbol
}

export const Non_empty_name = withMessage(
    io.brand(
        io.string,
        (s: string): s is io.Branded<string, NonEmptyString50Brand> => s.length > 0 && s.length <= 50,
        'NonEmptyString50'
    ), input => codec_error(input, `${input} n'est pas entre 1 et 50 characters`)
)

export const Non_empty_name_error = pipe(
    Non_empty_name,
    input => field_error(input, "name")
)
export type Non_empty_string_50 = io.TypeOf<typeof Non_empty_name>

export const Non_empty_string_title =
    withMessage(
        io.brand(
            io.string,
            (s: string): s is io.Branded<string, NonEmptyString50Brand> => s.trim.length > 0 && s.length <= 250,
            'NonEmptyString50'
        ), input => codec_error(input, `${input} n'est pas entre 1 et 250 characters`))

export type Non_empty_string_250 = io.TypeOf<typeof Non_empty_string_title>

interface NonEmptyMessage {
    readonly NonEmptyMessage: unique symbol
}

export const Non_empty_message = withMessage(
    io.brand(
        io.string,
        (s: string): s is io.Branded<string, NonEmptyMessage> => s.trim.length > 0,
        "NonEmptyMessage"
    ), input => codec_error(input, "Le message est vide")
)

export type Non_empty_message = io.TypeOf<typeof Non_empty_message>