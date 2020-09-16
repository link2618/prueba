import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography } from '@material-ui/core'

import useStyles from './style'
import { Form } from '../Control/form'
import Control from '../Control/control'

import { validateEmail } from '../../utils/validations'
import { registro } from '../../services/registro'

function Register() {
    const classes = useStyles()
    const [visible, setVisible] = useState(false)
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
            conts.email = true
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

    const visibleBoton = () => {
        setVisible(!visible)
    }

    return (
      <Container className={classes.container}>
          <Card className={classes.caja}>
              <CardContent>
                  <Typography className={classes.titulo}>REGISTRO</Typography>
                  <Form >
                    <Grid container>
                        <Grid item>
                            <Control.Input
                                name = 'name'
                                label = 'Nombres'
                                value = {formData.name}
                                onChange = {handleInputChange}
                                error = {formError.name}
                                helperText = {formError.name ? "Campo Obligatorio." : ""}
                                required = {true}
                            />
                            <Control.Input
                                name = 'identificacion'
                                label = 'Identificación'
                                value = {formData.identificacion}
                                onChange = {handleInputChange}
                                type = 'number'
                                error = {formError.identificacion}
                                helperText = {formError.identificacion ? "Campo Obligatorio." : ""}
                                required = {true}
                            />
                            <Control.Input
                                name = 'email'
                                label = 'Email'
                                value = {formData.email}
                                onChange = {handleInputChange}
                                error = {formError.email}
                                helperText = {formError.email ? cont.email ? "Correo electronico invalido." : "Campo Obligatorio." : ""}
                                required = {true}
                            />
                            <Control.InputIcon
                                name = 'pass'
                                label = 'Contraseña'
                                value = {formData.pass}
                                onChange = {handleInputChange}
                                type = {visible ? 'text' : 'password'}
                                error = {formError.pass}
                                helperText = {formError.pass ? cont.pass ? "La contraseña no coinciden" : "Campo Obligatorio." : ""}
                                required = {true}
                                onClick = {visibleBoton}
                                // onMouseDown = {}
                                icon = {visible}
                            />
                            <Control.InputIcon
                                name = 'passRepit'
                                label = 'Contraseña'
                                value = {formData.passRepit}
                                onChange = {handleInputChange}
                                type = {visible ? 'text' : 'password'}
                                error = {formError.passRepit}
                                helperText = {formError.passRepit ? cont.pass ? "La contraseña no coinciden" : "Campo Obligatorio." : ""}
                                required = {true}
                                onClick = {visibleBoton}
                                // onMouseDown = {}
                                icon = {visible}
                            />
                        </Grid>
                    </Grid>
                  </Form>
              </CardContent>
              <CardActions>
                  <Button type="submit" size="large" variant="contained" className={classes.boton} onClick={() => {
                      if(validation())
                      {
                        registro(formData.name, formData.identificacion, formData.email, formData.pass)
                      }
                  }}>
                      Registrarse
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Register