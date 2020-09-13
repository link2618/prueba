import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { Link, NavLink } from "react-router-dom"


import useStyles from './style'

function Header() {
    const classes = useStyles()
    return (
      <header>
          <AppBar className={classes.root}>
              <Toolbar className={classes.boton}>
                  <Link to='/login' className={classes.link}>
                    <Button color="inherit">
                    Login
                    </Button>
                  </Link>
                  <Link to='/registro' className={classes.link}>
                    <Button color="inherit">
                    Registro
                    </Button>
                  </Link>
              </Toolbar>
          </AppBar>
          <div className={classes.offset}/>
      </header>
    )
  }
  
  export default Header