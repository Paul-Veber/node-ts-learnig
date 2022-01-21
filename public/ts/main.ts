import { add_entry } from "./guestbook/add_entry";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#guestbook_form')
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault()

            add_entry(form)
        })
    }
})