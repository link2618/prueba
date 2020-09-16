import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography } from '@material-ui/core'

import useStyles from '../../utils/globalStyle'
import { Form } from '../Control/form'
import Control from '../Control/control'

import { validateEmail } from '../../utils/validations'
import { login } from '../../services/login'

function Login() {
    const classes = useStyles()
    const [formData, setFormData] = useState({
        email: '',
        pass: ''
    })
    const [formError, setFormError] = useState({
        email: false,
        pass: false
    })
    const [cont, setCont] = useState({
        email: false,
        pass: false
    })

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const validation = () => {
        let errors = {}
        let comp = true //comprobante para saber si todos los campos pasaron la validacion
        let conts = {}
        if (!formData.email || !formData.pass) 
        {
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
        }else if(!validateEmail(formData.email)) 
        {
            errors.email = true
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
                  <Typography className={classes.titulo}>LOGIN</Typography>
                  <Form>
                    <Grid container>
                        <Grid item>
                            <Control.Input
                                name = 'email'
                                label = 'Email'
                                value = {formData.email}
                                onChange = {handleInputChange}
                                error = {formError.email}
                                helperText = {formError.email ? cont.pass ? "Correo electronico invalido." : "Campo Obligatorio." : ""}
                                required = {true}
                            />
                            <Control.Input
                                name = 'pass'
                                label = 'Contraseña'
                                value = {formData.pass}
                                onChange = {handleInputChange}
                                type = 'password'
                                error = {formError.pass}
                                helperText = {formError.pass ? "Campo Obligatorio." : ""}
                                required = {true}
                            />
                        </Grid>
                    </Grid>
                  </Form>
              </CardContent>
              <CardActions>
                  <Button type="submit" size="large" variant="contained" className={classes.boton} onClick={() => {
                      if(validation())
                      {
                          login(formData.email, formData.pass)
                      }
                  }}>
                      Entrar
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Login