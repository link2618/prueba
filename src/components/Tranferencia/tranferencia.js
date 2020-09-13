import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography, TextField } from '@material-ui/core'

import useStyles from './style'

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
                  <form className={classes.root}>
                  <Grid container>
                      <Grid item>
                          <TextField label="Numero de cuenta destino" variant="outlined" className={[classes.input, formError.numCuentaDest && classes.error]} name="numCuentaDest" 
                          value={formData.numCuentaDest} onChange={handleInputChange} helperText={formError.numCuentaDest ? "Campo Obligatorio" : "" } type="number" required />
                          <TextField label="Valor a tranferir" variant="outlined" className={[classes.input, formError.transferir && classes.error]} name="transferir" 
                          value={formData.transferir} onChange={handleInputChange} helperText={formError.transferir ? "Campo Obligatorio" : "" } type="number" required />
                      </Grid>
                  </Grid>
                  </form>
              </CardContent>
              <CardActions>
                  <Button type="submit" size="large" variant="contained" className={classes.boton} onClick={() => {
                      validation()
                      console.log(formData)
                    }}>
                      FINALIZAR
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Tranferencia