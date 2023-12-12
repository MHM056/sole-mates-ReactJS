import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as shoeService from "../../services/shoeService";

export default function EditPair() {
    const navigate = useNavigate();
    const { shoeId } = useParams();
    const [values, setValues] = useState({});

    useEffect(() => {
        shoeService.getOne(shoeId)
            .then(setValues);
    }, [shoeId]);

    const onChange = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onEditSubmit = async (e) => {
        e.preventDefault();

        await shoeService.edit(shoeId, values);
        navigate(`/pairs/${shoeId}/details`);
    };

    return (
        <section id="edit">
            <div className="form">
                <h2>Edit item</h2>
                <form className="edit-form" onSubmit={onEditSubmit}>
                    <input type="text" value={values.brand} onChange={onChange} name="brand" id="shoe-brand" placeholder="Brand" />
                    <input type="text" value={values.model} onChange={onChange} name="model" id="shoe-model" placeholder="Model" />
                    <input type="text" value={values.imageUrl} onChange={onChange} name="imageUrl" id="shoe-img" placeholder="Image url" />
                    <input type="text" value={values.release} onChange={onChange} name="release" id="shoe-release" placeholder="Release date" />
                    <input type="text" value={values.designer} onChange={onChange} name="designer" id="shoe-designer" placeholder="Designer" />
                    <input type="text" value={values.value} onChange={onChange} name="value" id="shoe-value" placeholder="Value" />

                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
};