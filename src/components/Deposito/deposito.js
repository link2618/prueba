import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography, TextField } from '@material-ui/core'

import useStyles from './style'

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
                  <form className={classes.root}>
                  <Grid container>
                      <Grid item>
                          <TextField id="outlined-basic" label="Valor a depositar" variant="outlined" className={[classes.input, formError.deposito && classes.error]} name="deposito" 
                          value={formData.deposito} onChange={handleInputChange} helperText={formError.deposito ? "Campo Obligatorio" : "" } type="number" required />
                      </Grid>
                  </Grid>
                  </form>
              </CardContent>
              <CardActions>
                  <Button type="submit" size="large" variant="contained" className={classes.boton} onClick={() => validation()}>
                      DEPOSITAR
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Deposito