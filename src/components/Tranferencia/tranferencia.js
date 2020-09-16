import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography } from '@material-ui/core'

import useStyles from '../../utils/globalStyle'
import { Form } from '../Control/form'
import Control from '../Control/control'

function Tranferencia() {
    const classes = useStyles()
    const [formData, setFormData] = useState({
        transferir: '',
        numCuentaDest: ''
    })
    const [formError, setFormError] = useState({
        transferir: false,
        numCuentaDest: false
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
        if (!formData.transferir || !formData.numCuentaDest) 
        {
            if (!formData.transferir) 
            {
                errors.transferir = true
                comp = false
            }
            if (!formData.numCuentaDest) 
            {
                errors.numCuentaDest = true
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
                  <Typography className={classes.titulo}>TRANSFERENCIA</Typography>
                  <Form>
                  <Grid container>
                      <Grid item>
                          <Control.Input
                                name = 'numCuentaDest'
                                label = 'Numero de cuenta destino'
                                value = {formData.numCuentaDest}
                                onChange = {handleInputChange}
                                error = {formError.numCuentaDest}
                                helperText = {formError.numCuentaDest ? "Campo Obligatorio." : ""}
                                required = {true}
                                type = "number"
                            />
                            <Control.Input
                                name = 'transferir'
                                label = 'Valor a tranferir'
                                value = {formData.transferir}
                                onChange = {handleInputChange}
                                error = {formError.transferir}
                                helperText = {formError.transferir ? "Campo Obligatorio." : ""}
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
                      FINALIZAR
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Tranferencia