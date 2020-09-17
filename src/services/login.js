import { LOGIN } from '../utils/constantes'

export const login = async (email, pass) => {

    let envio = {
        email: email,
        clave: pass
    }

    console.log(envio)
    
    // return new Promise((resolver, rechazar) => {
    //     fetch(LOGIN, {
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
    //         // console.log(json)
    //         if(json == null)
    //         {
    //             alert("Alguno de os datos esta incorrecto")
    //         }else
    //         {
    //             // Guardar datos en data
    //             /* {
    //                 "CUENTA": [],
    //                 "id_usuario": 1,
    //                 "nombre": "Anita",
    //                 "identificacion": "123456789",
    //                 "email": "anitaaaaaa2asdas@gmail.com",
    //                 "clave": "111111",
    //                 "estado": "1"
    //             } */
    //             alert("Logueo exitoso.")
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error)
    //         resolver(false)
    //     })
    // })
}