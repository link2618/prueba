import React from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { Link, NavLink } from "react-router-dom"


import useStyles from './style'

function HeaderHome() {
    const classes = useStyles()
    return (
      <header>
          <AppBar className={classes.root}>
              <Toolbar>
                  <Link to='/retiro' className={classes.link}>
                      <Button color="inherit">Retiro</Button>
                  </Link>
                  <Link to='/deposito' className={classes.link}>
                      <Button color="inherit">Deposito</Button>
                  </Link>
                  <Link to='/tranferencia' className={classes.user}>
                      <Button color="inherit">Tranferencia</Button>
                  </Link>
                  <div >
                  <Typography>Bienvenido Usuario</Typography>
                  </div>
              </Toolbar>
          </AppBar>
          <div className={classes.offset}/>
      </header>
    )
  }
  
  export default HeaderHome