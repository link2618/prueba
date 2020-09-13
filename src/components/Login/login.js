import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography, TextField } from '@material-ui/core'

import useStyles from './style'
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

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const validation = () => {
        let errors = {}
        let comp = true //comprobante para saber si todos los campos pasaron la validacion
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
        }

        setFormError(errors)

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
                  <form className={classes.root}>
                  <Grid container>
                      <Grid item>
                          <TextField label="Email" variant="outlined" className={[classes.input, formError.email && classes.error]} name="email" 
                          value={formData.email} onChange={handleInputChange} helperText={formError.email ? "Campo Obligatorio" : "" } required />
                          <TextField label="Contraseña" type="password" variant="outlined" className={[classes.input, formError.pass && classes.error]} name="pass"
                          alue={formData.pass} onChange={handleInputChange} helperText={formError.pass ? "Campo Obligatorio" : "" } required />
                      </Grid>
                  </Grid>
                  </form>
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