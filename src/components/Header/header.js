import React, { useState } from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import useStyles from './style'

function Header({ data }) {
    const classes = useStyles()
    const [login, setLogin] = useState(false)
    console.log(data)
    return (
      <header>
          <AppBar className={classes.root}>
              <Toolbar className={classes.derecha}>
                  {login ?
                  <>
                  <Link to='/retiro' className={classes.link}>
                      <Button color="inherit">Retiro</Button>
                  </Link>
                  <Link to='/deposito' className={classes.link}>
                      <Button color="inherit">Deposito</Button>
                  </Link>
                  <Link to='/tranferencia' className={classes.link}>
                      <Button color="inherit">Tranferencia</Button>
                  </Link>
                  <Typography className={classes.user}>Bienvenido Usuario</Typography>
                  </> :
                  <>
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
                  </>
                  }
              </Toolbar>
          </AppBar>
          <div className={classes.offset}/>
      </header>
    )
  }
  
  // export default Header
const mapStateToProps = state => {
    return { data: state.logueado }
}

export default connect(mapStateToProps)(Header)