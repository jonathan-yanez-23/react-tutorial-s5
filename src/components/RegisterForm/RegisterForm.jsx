import React, {Component} from "react";
import { register } from "../../api/auth";


class Form extends Component {
    state = {
        form: {
            username: '',
            email: '',
            password: ''
        },
        error: null
    }

    // Manejador de los submit (boton submit)
    handleForSubmit = async (e) => {
        e.preventDefault();
        try {
            // Enviar como argumento el estado actual del formulario
           
            const data = await register(this.state.form);
            // Por ahora dejaremos un log, y mas tarde agregamos la logica
            console.log("REGISTRO COMPLETADO", data);
        } catch (err) {
            this.setState({
                error: err.message
            });
        }
    }

    // Manejadord de cambios en los input
    handleChangeInput = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        });
        this.setState((prevState) => ({
            form: {
                ...prevState.form,
                [inputName]: inputValue
            }
        }));
    }

    render() {
        return (
            <form onSubmit={this.handleForSubmit}>
                <label htmlFor="username">
                    <p>Nombre de usuario</p>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChangeInput}
                    />
                </label>


                <label htmlFor="email">
                    <p>Email</p>
                    <input 
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChangeInput}
                        />
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
                        Al menos: 8 caracteres, Minusculas, Numeros, No caracteres especiales.
                    </p>
                    {this.state.error ? (
                        <p style= {{color: "red"}}>{this.state.error}</p>
                    ): null}
                    <button type="submit">REGISTRAR MI CUENTA</button>
                </label>
            </form>
        );
    }
}

export default Form;