import React, { Component } from "react";
import { login } from "../../api/auth";

class LoginForm extends Component {
    state = {
        form: {
            email: "",
            password: ""
        },
        error: null
    };

    handleChangeInput = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        // Mantener info pr3evia en el formulario al tener una clave de profundidad
        this.setState((prevState) => ({
            form: {
                ...prevState.form,
                [inputName]: inputValue
            }
        }));
    }

    handleFormSubmit = async (e) =>  {
        e.preventDefault();
        try {
            const data = await login(this.state.form);
            console.log("FULL FILLED!", data);
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }


    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="email">
                    <p>Email</p>
                    <input 
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChangeInput} />
                </label>

                <label htmlFor="password">
                    <p>Contraseña</p>
                    <input 
                        type="text" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChangeInput}
                        />

                <p>
                    AL MENOS 8 CARACTERES, MAYUSCULAS, MINUSCULAS Y NUMEROS. SIN 
                    CARACTERES ESPECIALES
                </p>
                </label>
                {this.state.error ? (
                        <p style= {{color: "red"}}>{this.state.error}</p>
                    ): null}
                <button type="submit">LOGIN</button>

            </form>
        );
    }
}


export default LoginForm;
