import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

export default function Register() {
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
                    {/* <p id="emailError" className="error">{errors && errors.email}</p> */}

                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    {/* <p id="passwordError" className="error">{errors && errors.password}</p> */}

                    <input
                        type="password"
                        name="confirmPassword"
                        id="repeat-password"
                        placeholder="repeat password"
                        value={values.confirmPassword}
                        onChange={onChange}
                    />
                    {/* <p id="confirmPasswordError" className="error">{errors && errors.confirmPassword}</p> */}
                    <button type="submit">login</button>
                    <p className="message">Already registered? <Link to="/login">Login</Link></p>
                </form>
            </div>
        </section>
    );
};