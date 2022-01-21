export const new_entry = (pseudo: string, body:string) => {
    const pseudo_html = document.createElement("h3")
    pseudo_html.innerText = pseudo

    const body_html = document.createElement('p')
    body_html.innerText = body

    const entry_div = document.createElement('div')
    entry_div.className = 'entry'
    entry_div.appendChild(pseudo_html)
    entry_div.appendChild(body_html)

    return entry_div
}