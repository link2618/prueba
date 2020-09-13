import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

import useStyles from './style'

function Header() {
    const classes = useStyles()
    return (
      <header>
          <AppBar className={classes.root}>
              <Toolbar className={classes.boton}>
                  <Button color="inherit">Login</Button>
                  <Button color="inherit">Registro</Button>
              </Toolbar>
          </AppBar>
          <div className={classes.offset}/>
      </header>
    )
  }
  
  export default Header