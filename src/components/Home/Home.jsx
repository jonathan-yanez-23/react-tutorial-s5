import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>BIENVENIDO A WEBAPP EN REACT</h1>
                <div>
                    <a href="/login">INICIAR SESION</a>
                </div>
                <div>
                    <a href="/register">REGISTRARME</a>
                </div>

                <div>
                    <Link to="/secret">Ruta Secreta</Link>
                </div>
            </div>
        );
    }
}