import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography } from '@material-ui/core'

import useStyles from '../../utils/globalStyle'
import { Form } from '../Control/form'
import Control from '../Control/control'

function Retiro() {
    const classes = useStyles()
    const [formData, setFormData] = useState({
        retiro: ''
    })
    const [formError, setFormError] = useState({
        retiro: false
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
        if (!formData.retiro) 
        {
            if (!formData.retiro) 
            {
                errors.retiro = true
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
                  <Typography className={classes.titulo}>RETIRO</Typography>
                  <Form>
                  <Grid container>
                      <Grid item>
                          <Control.Input
                                name = 'retiro'
                                label = 'Valor a retirar'
                                value = {formData.retiro}
                                onChange = {handleInputChange}
                                error = {formError.retiro}
                                helperText = {formError.retiro ? "Campo Obligatorio." : ""}
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
                      RETIRAR
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Retiro