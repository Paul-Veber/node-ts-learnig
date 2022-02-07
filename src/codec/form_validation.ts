import * as io from 'io-ts'
import { type } from 'os'
import { EmailAddress } from "./mail"
import { Non_empty_string_250, Non_empty_string_50 } from './non_empty_string'

export const Register_form = io.type({
    email: EmailAddress,
    name: Non_empty_string_50,
    password: io.string,
})

export const partial_register_form = io.partial(Register_form.props)

export type Partial_register_form = io.TypeOf<typeof partial_register_form>

export const Login = io.type({
    email: EmailAddress,
    password: io.string
})

export type Login = io.TypeOf<typeof Login>

export const Post = io.type({
    title: Non_empty_string_250,
    message: io.string,
})

const Post_edit = io.type({
    title: io.string,

})