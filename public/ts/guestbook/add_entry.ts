import { new_entry } from "./new_entry"

export const add_entry = (form_dom:Element) => {
    const form = form_dom
    const entries_div = document.querySelector('#entries')

    const pseudo = (<HTMLInputElement>form.querySelector('#pseudo')).value
    const body = (<HTMLInputElement>form.querySelector('#body')).value
    entries_div.appendChild(new_entry(pseudo, body))
}