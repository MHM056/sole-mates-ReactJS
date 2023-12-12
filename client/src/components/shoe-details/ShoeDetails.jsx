import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as shoeService from "../../services/shoeService";
import AuthContext from "../../contexts/authContext";

export default function ShoeDetails() {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const { shoeId } = useParams();
    const [pair, setPair] = useState({});
    const isAuthor = userId === pair._ownerId;

    useEffect(() => {
        shoeService.getOne(shoeId)
            .then(setPair);
    }, [shoeId]);


    const onDelete = async (e) => {
        e.preventDefault();

        const hasConfirmed = confirm('Are you sure you want to delete this game?');

        if (hasConfirmed) {
            await shoeService.remove(shoeId);
            navigate('/catalog');
        }
    }

    return (
        <section id="details">
            <div id="details-wrapper">
                <p id="details-title">Shoe Details</p>
                <div id="img-wrapper">
                    <img src={pair.imageUrl} alt={pair.model} />
                </div>
                <div id="info-wrapper">
                    <p>Brand: <span id="details-brand">{pair.brand}</span></p>
                    <p>
                        Model: <span id="details-model">{pair.model}</span>
                    </p>
                    <p>Release date: <span id="details-release">{pair.release}</span></p>
                    <p>Designer: <span id="details-designer">{pair.designer}</span></p>
                    <p>Value: <span id="details-value">{pair.value}</span></p>
                </div>

                {isAuthor && (
                    <div id="action-buttons">
                        <Link to={`/pairs/${shoeId}/edit`} id="edit-btn">Edit</Link>
                        <a onClick={onDelete} href="" id="delete-btn">Delete</a>
                    </div>
                )}
            </div>
        </section>
    );
};