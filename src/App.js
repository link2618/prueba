import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from './components/Header/header'
import Home from './components/Home/home'
import Register from './components/Register/register'
import Login from './components/Login/login'
import Datos from './components/Datos/datos'
import Retiro from './components/Retiro/retiro'
import Deposito from './components/Deposito/deposito'
import Tranferencia from './components/Tranferencia/tranferencia'

function App() {
    return(
        <Router>
            <Header />
            <Switch>
                <Route path="/registro">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/home">
                    <Datos />
                </Route>
                <Route path="/retiro">
                    <Datos />
                    <Retiro />
                </Route>
                <Route path="/deposito">
                    <Datos />
                    <Deposito />
                </Route>
                <Route path="/tranferencia">
                    <Datos />
                    <Tranferencia />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App