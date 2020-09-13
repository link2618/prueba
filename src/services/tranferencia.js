const URL = ""

export const tranferencia = async (cuentaO, cant, cuentaD) => {

    let envio = {
        CuentaOrigen: cuentaO,
        Cantidad: cant,
        CuentaDestino: cuentaD
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