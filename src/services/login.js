const URL = ""

export const login = async (email, pass) => {

    let envio = {
        email: email,
        clave: pass
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