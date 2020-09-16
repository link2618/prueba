import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography } from '@material-ui/core'

import useStyles from '../../utils/globalStyle'
import { Form } from '../Control/form'
import Control from '../Control/control'

function Deposito() {
    const classes = useStyles()
    const [formData, setFormData] = useState({
        deposito: ''
    })
    const [formError, setFormError] = useState({
        deposito: false
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
        if (!formData.deposito) 
        {
            if (!formData.deposito) 
            {
                errors.deposito = true
                comp = false
            }
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
                  <Typography className={classes.titulo}>DEPOSITO</Typography>
                  <Form>
                  <Grid container>
                      <Grid item>
                          <Control.Input
                                name = 'deposito'
                                label = 'Valor a depositar'
                                value = {formData.deposito}
                                onChange = {handleInputChange}
                                error = {formError.deposito}
                                helperText = {formError.deposito ? "Campo Obligatorio." : ""}
                                required = {true}
                                type = "number"
                            />
                      </Grid>
                  </Grid>
                  </Form>
              </CardContent>
              <CardActions>
                  <Button type="submit" size="large" variant="contained" className={classes.boton} onClick={() => {
                      if(validation())
                      {
                          console.log(formData)
                      }
                  }}>
                      DEPOSITAR
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Deposito