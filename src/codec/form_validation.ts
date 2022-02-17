import * as io from 'io-ts'
import { EmailAddress } from "./mail"
import { Non_empty_message, Non_empty_name, Non_empty_string_250, Non_empty_string_50, Non_empty_string_title } from './non_empty_string'
import { Non_empty_password_50 } from './password'

export const Register_form = io.type({
    email: EmailAddress,
    name: Non_empty_name,
    password: Non_empty_password_50,
}, "Register")

export const partial_register_form = io.partial(Register_form.props)
export type Partial_register_form = io.TypeOf<typeof partial_register_form>

export const Login = io.type({
    email: EmailAddress,
    password: Non_empty_password_50
}, "Login")

export type Login = io.TypeOf<typeof Login>

export const Post = io.type({
    title: Non_empty_string_title,
    message: Non_empty_message,
}, "Post")
export const Partial_post = io.partial(Post.props)

export type Post = io.TypeOf<typeof Post>
export type Partial_post = io.TypeOf<typeof Partial_post>


