import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography, TextField } from '@material-ui/core'

import useStyles from './style'

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
                  <form className={classes.root}>
                  <Grid container>
                      <Grid item>
                          <TextField label="Valor a retirar" variant="outlined" className={[classes.input, formError.retiro && classes.error]} name="retiro" 
                          value={formData.retiro} onChange={handleInputChange} helperText={formError.retiro ? "Campo Obligatorio" : "" } type="number" required />
                      </Grid>
                  </Grid>
                  </form>
              </CardContent>
              <CardActions>
                  <Button type="submit" size="large" variant="contained" className={classes.boton} onClick={() => validation()}>
                      RETIRAR
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Retiro