import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

export const Register = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        confirmPassword: ''
    });

    return (
        <section id="register">
            <div className="form">
                <h2>Register</h2>
                <form className="login-form" onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                        value={values.email}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        id="repeat-password"
                        placeholder="repeat password"
                        value={values.confirmPassword}
                        onChange={onChange}
                    />
                    <button type="submit">login</button>
                    <p className="message">Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </section>
    );
};