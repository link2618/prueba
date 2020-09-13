import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from './components/Header/header'
import HeaderHome from './components/HeaderHome/headerHome'
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
            <Switch>
                <Route path="/registro">
                    <Header />
                    <Register />
                </Route>
                <Route path="/login">
                    <Header />
                    <Login />
                </Route>
                <Route path="/home">
                    <HeaderHome />
                    <Datos />
                </Route>
                <Route path="/retiro">
                    <HeaderHome />
                    <Datos />
                    <Retiro />
                </Route>
                <Route path="/deposito">
                    <HeaderHome />
                    <Datos />
                    <Deposito />
                </Route>
                <Route path="/tranferencia">
                    <HeaderHome />
                    <Datos />
                    <Tranferencia />
                </Route>
                <Route path="/">
                    <Header />
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App