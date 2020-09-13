import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography, TextField } from '@material-ui/core'

import useStyles from './style'
import { validateEmail } from '../../utils/validations'

function Register() {
    const classes = useStyles()
    const [formData, setFormData] = useState({
        name: '',
        identificacion: '',
        email: '',
        pass: '',
        passRepit: ''
    })
    const [formError, setFormError] = useState({
        name: false,
        identificacion: false,
        email: false,
        pass: false,
        passRepit: false
    })
    const [cont, setCont] = useState({
        name: false,
        identificacion: false,
        email: false,
        pass: false,
        passRepit: false
    })

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const validation = () => {
        let errors = {}
        let conts = {}
        let comp = true //comprobante para saber si todos los campos pasaron la validacion
        if (!formData.name || !formData.identificacion || !formData.email || !formData.pass || !formData.passRepit) 
        {
            if (!formData.name) 
            {
                errors.name = true
                comp = false
            }
            if (!formData.identificacion) 
            {
                errors.identificacion = true
                comp = false
            }
            if (!formData.email) 
            {
                errors.email = true
                comp = false
            }
            if (!formData.pass) 
            {
                errors.pass = true
                comp = false
            }
            if (!formData.passRepit) 
            {
                errors.passRepit = true
                comp = false
            }
        }else if(!validateEmail(formData.email)) 
        {
            errors.email = true
            comp = false
        }else if(formData.pass !== formData.passRepit)
        {
            errors.pass = true
            errors.passRepit = true
            comp = false
            conts.pass = true
        }

        setFormError(errors)
        setCont(conts)

        if(comp)
        {
            return true
        }else
        {
            return false
        }
    }

    return (
      <Container className={classes.container}>
          <Card className={classes.caja}>
              <CardContent>
                  <Typography className={classes.titulo}>REGISTRO</Typography>
                  <form className={classes.root}>
                  <Grid container>
                      <Grid item>
                          <TextField id="outlined-basic" label="Nombres" variant="outlined" className={[classes.input, formError.name && classes.error]} name="name"
                          value={formData.name} onChange={handleInputChange} helperText={formError.name ? "Escribir Nombre" : "" } required />
                          <TextField id="outlined-basic" label="Identificación" variant="outlined" className={[classes.input, formError.identificacion && classes.error]} name="identificacion"
                          value={formData.identificacion} onChange={handleInputChange} type="number" helperText={formError.identificacion ? "Numero de identificacion" : "" } required />
                          <TextField id="outlined-basic" label="Email" variant="outlined" className={[classes.input, formError.email && classes.error]} name="email" 
                          value={formData.email} onChange={handleInputChange} helperText={formError.email ? "Agregar un correo electronico valido" : "" } required />
                          <TextField id="outlined-password-input" label="Contraseña" type="password" variant="outlined" className={[classes.input, formError.pass && classes.error]} name="pass"
                          alue={formData.pass} onChange={handleInputChange} helperText={formError.pass ? cont.pass ? "La contraseña no coinciden" : "Ingresar contraseña" : "" } required />
                          <TextField id="outlined-password-input" label="Confirmar contraseña" type="password" variant="outlined" className={[classes.input, formError.passRepit && classes.error]} name="passRepit"
                          alue={formData.passRepit} onChange={handleInputChange} helperText={formError.passRepit ? "Ingresar contraseña" : "" } required />
                      </Grid>
                  </Grid>
                  </form>
              </CardContent>
              <CardActions>
                  <Button type="submit" size="large" variant="contained" className={classes.boton} onClick={() => validation()}>
                      Registrarse
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Register