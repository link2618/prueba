const URL = ""

export const registro = async (nombre, identificacion, email, pass) => {

    let envio = {
        nombre: nombre,
        identificacion: identificacion,
        email: email,
        clave: pass,
        estado: 1
    }

    console.log(envio)
    
    /* return new Promise((resolver, rechazar) => {
        fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(envio)
        })
        .then(response => {
            // console.log(response)
            return response.json()
        })
        .then( async json => {
            console.log(json)
        })
        .catch(error => {
            console.error(error)
            resolver(false)
        })
    }) */
}