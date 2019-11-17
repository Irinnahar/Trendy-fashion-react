import React, { Component } from 'react';
import InputField from '../../shared/input-field/input-field.component';

import './signin.styles.scss';

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="Signin">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <InputField
                        type="email"
                        name="email"
                        label="Email"
                        required
                        handleChange={this.handleChange}
                        value={this.state.email}
                    />
                    <InputField
                        type="password"
                        name="password"
                        label="Password"
                        required
                        handleChange={this.handleChange}
                        value={this.state.password}
                    />
                    <input
                        type="submit"
                    />
                </form>
            </div>
        )
    }
}

export default Signin;
