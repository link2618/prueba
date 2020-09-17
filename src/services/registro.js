import { REGISTER } from '../utils/constantes'

export const registro = async (nombre, identificacion, email, pass) => {

    let envio = {
        nombre: nombre,
        identificacion: identificacion,
        email: email,
        clave: pass,
        estado: '1'
    }

    console.log(envio)
    
    // return new Promise((resolver, rechazar) => {
    //     fetch(REGISTER, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(envio)
    //     })
    //     .then(response => {
    //         // console.log(response)
    //         return response.json()
    //     })
    //     .then( async json => {
    //         console.log(json)
    //         if (json === true)
    //         {
    //             alert("Se ha registrado con exito")
    //         }else
    //         {
    //             switch(json.Message)
    //             {
    //                 /* case "El email esta siendo usado por otro usuario.":
    //                     break
    //                 case "La identificación está siendo usada por otro usuario.":
    //                     break */
    //                 default:
    //                     alert(json.Message)
    //                     break
    //             }
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error)
    //         resolver(false)
    //     })
    // })
}