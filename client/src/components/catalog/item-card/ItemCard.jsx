import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";

export const ItemCard = ({
    _id,
    brand,
    model,
    imageUrl,
    value,
}) => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <li className="card">
            <img src={imageUrl} alt="travis" />
            <p>
                <strong>Brand: </strong><span className="brand">{brand}</span>
            </p>
            <p>
                <strong>Model: </strong><span className="model">{model}</span>
            </p>
            <p><strong>Value:</strong><span className="value">{value}</span>$</p>
            {isAuthenticated && (
                <Link className="details-btn" to={`/pairs/${_id}/details`}>Details</Link>
            )}
        </li>
    );
};