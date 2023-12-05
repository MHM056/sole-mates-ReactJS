import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export const Header = () => {
    const { isAuthenticated, email } = useContext(AuthContext);

    return (
        <header>
            {/* <!-- Navigation --> */}
            <Link id="logo" to="/"><img id="logo-img" src="./images/logo.png" alt="" /></Link>

            <nav>
                <div>
                    <Link to="/catalog">Dashboard</Link>
                    <Link to="/search">Search</Link>
                </div>

                {/* <!-- Logged-in users --> */}
                {isAuthenticated && (
                    <div className="user">
                    <Link to="/pairs/create">Add Pair</Link>
                    <Link to="/logout">Logout</Link>
                    <span>| {email}</span>
                </div>
                )}

                {/* <!-- Guest users --> */}
                {!isAuthenticated && (
                <div className="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                )}
            </nav>
        </header>
    )
};