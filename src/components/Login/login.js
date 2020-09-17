import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography } from '@material-ui/core'
import { connect } from "react-redux"
// import { Redirect } from "react-router-dom"

import useStyles from '../../utils/globalStyle'
import { Form } from '../Control/form'
import Control from '../Control/control'

import { validateEmail } from '../../utils/validations'
import { login } from '../../services/login'
import { logueado } from '../../global-store/actions'

function Login({ data1, logueado }) {
    const classes = useStyles()
    const [visible, setVisible] = useState(false)
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

    const visibleBoton = () => {
        setVisible(!visible)
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
                            <Control.InputIcon
                                name = 'pass'
                                label = 'Contraseña'
                                value = {formData.pass}
                                onChange = {handleInputChange}
                                type = {visible ? 'text' : 'password'}
                                error = {formError.pass}
                                helperText = {formError.pass ? "Campo Obligatorio." : ""}
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
                  <Button type="submit" size="large" variant="contained" className={classes.boton} onClick={async () => {
                      if(validation())
                      {
                          let resp = await login(formData.email, formData.pass)
                          if(resp)
                          {
                            logueado({data1})
                            // return <Redirect to='/home' />
                          }
                      }
                  }}>
                      Entrar
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
// export default Login

const mapStateToProps = state => {
    return { data1: state.logueado }
}

const mapDispatchToProps = dispatch => ({
    logueado: (item) => dispatch(logueado(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)