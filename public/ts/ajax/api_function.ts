import { Methods, Models } from "../utils/types"

const config: RequestInit = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
}
const apiRootUrl = "http://localhost:3000/"

/**
 * create an http request to fetch data
 */
export const fetchData = (endpoint: string, dataProcess: Function) => {
    fetch(`${apiRootUrl}${endpoint}`, config)
        .then((response) => {
            console.log(response)
            return response.json()
        })

        .then((data) => {
            dataProcess(data)
        })
}

/**
 *create config to send Data  
 */
export const sendingApiConfig = (data: Models, method: Methods):RequestInit => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    return {
        method: `${method}`,
        mode: "cors",
        cache: "no-cache",
        // On ajoute les headers dans les options
        headers: myHeaders,
        // On ajoute les données, encodée en JSON, dans le corps de la requête
        body: JSON.stringify(data),
    }
}

/**
 * for testing sendData()
 */
const defaultMessage = (response: Response) => {
    if (response.status == 201) {
        console.log(response)
        alert("ajout effectué")
    } else {
        alert("L'ajout a échoué")
    }
}

/**
 * create http request to send data to DB
 * @param {string} endpoint 
 * @param {object} configToSend 
 * @param {function} messageToDisplay 
 * @param {function} functionToExecute 
 */
export const sendData = (endpoint: string, configToSend: RequestInit, functionToExecute = defaultMessage) => {
    fetch(`${apiRootUrl}${endpoint}`, configToSend).then(
        (response) => {
            console.log(response)
            functionToExecute(response)
        }
    )
}