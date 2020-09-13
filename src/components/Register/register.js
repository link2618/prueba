import React, { useState } from 'react'
import { Container, Card, CardContent, CardActions, Grid, Button, Typography, TextField } from '@material-ui/core'

import useStyles from './style'

function Register() {
    const classes = useStyles()
    const [formData, setFormData] = useState({})
    const [formError, setFormError] = useState({})
    return (
      <Container className={classes.container}>
          <Card className={classes.caja}>
              <CardContent>
                  <Typography className={classes.titulo}>REGISTRO</Typography>
                  <form className={classes.root}>
                  <Grid container>
                      <Grid item>
                          <TextField id="outlined-basic" label="Nombres" variant="outlined" className={classes.input}
                          value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                          <TextField id="outlined-basic" label="Identificación" variant="outlined" className={classes.input}
                          value={formData.identificacion} onChange={(e) => setFormData({...formData, identificacion: e.target.value})} type="number" required />
                          <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.input} 
                          value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                          <TextField id="outlined-password-input" label="Contraseña" type="password" variant="outlined" className={classes.input}
                          alue={formData.pass} onChange={(e) => setFormData({...formData, pass: e.target.value})} required />
                          <TextField id="outlined-password-input" label="Confirmar contraseña" type="password" variant="outlined" className={classes.input}
                          alue={formData.passRepit} onChange={(e) => setFormData({...formData, passRepit: e.target.value})} required />
                      </Grid>
                  </Grid>
                  </form>
              </CardContent>
              <CardActions>
                  <Button size="large" variant="contained" className={classes.boton} onClick={() => console.log(formData)}>
                      Registrarse
                  </Button>
               </CardActions>
          </Card >
    </Container>
    )
}
  
export default Register