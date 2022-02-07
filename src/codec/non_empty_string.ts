import * as io from 'io-ts'
import { withMessage } from 'io-ts-types'

interface NonEmptyString50Brand {
    readonly NonEmptyString50: unique symbol
}

export const Non_empty_string_50 = withMessage(
    io.brand(
        io.string,
        (s: string): s is io.Branded<string, NonEmptyString50Brand> => s.length > 0 && s.length <= 50,
        'NonEmptyString50'
    ), input => `${input} n'est pas entre 1 et 50 characters`)

export type Non_empty_string_50 = io.TypeOf<typeof Non_empty_string_50>

export const Non_empty_string_250 = withMessage(
    io.brand(
        io.string,
        (s: string): s is io.Branded<string, NonEmptyString50Brand> => s.length > 0 && s.length <= 250,
        'NonEmptyString50'
    ), input => `${input} n'est pas entre 1 et 50 characters`)

export type Non_empty_string_250 = io.TypeOf<typeof Non_empty_string_50>