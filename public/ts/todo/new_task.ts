import { to_HTML_element } from '../utils/type_helpers' 
export const new_task = (task_id: string, task_name: string, task_description: string) => {
    const template = (<HTMLTemplateElement>document.getElementById('task_template'))
    const task = to_HTML_element(template.content.firstElementChild.cloneNode(true));
    console.log(task)
    task.dataset.id = task_id
    to_HTML_element(task.querySelector('.task_title')).innerText = task_name
    to_HTML_element(task.querySelector('.task_body')).innerText = task_description 

    document.querySelector('#todo_task').appendChild(task)
}