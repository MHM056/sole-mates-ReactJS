import { Link } from "react-router-dom";

export const ItemCard = ({
    _id,
    brand,
    model,
    imageUrl,
    value,
}) => {
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
            <Link className="details-btn" to={`/pairs/${_id}/details`}>Details</Link>
        </li>
    );
};