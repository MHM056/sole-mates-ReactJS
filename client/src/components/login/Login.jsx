import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

export const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    });

    return (
        <section id="login" onSubmit={onSubmit}>
            <div className="form">
                <h2>Login</h2>
                <form className="login-form">
                    <input type="text" name="email" id="email" placeholder="email" value={values.email} onChange={onChange} />
                    <input type="password" name="password" id="password" placeholder="password" value={values.password} onChange={onChange} />
                    <button type="submit">login</button>
                    <p className="message">
                        Not registered? <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};