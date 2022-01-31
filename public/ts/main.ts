import { new_task } from "./todo/new_task";

document.addEventListener('DOMContentLoaded', () => {
    const todo_form = document.querySelector('#todo_list')
    if (todo_form) {
        todo_form.addEventListener('submit', (event) => {
            event.preventDefault()

            
        }) 
    }
})