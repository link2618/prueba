import React from 'react'
import { Container, Typography } from '@material-ui/core'

import useStyles from './style'

function Datos() {
    const classes = useStyles()
    return (
      <Container className={classes.container}>
          <Typography><b>Numero de cuenta:</b> #1234567890</Typography>
          <Typography><b>Saldo disponible:</b> $1000000</Typography>
      </Container>
    )
}
  
export default Datos