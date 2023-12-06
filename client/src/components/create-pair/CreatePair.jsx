import { useState } from "react";
import * as shoeService from "../../services/shoeService";
import { useNavigate } from "react-router-dom";

export const CreatePair = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        brand: '',
        model: '',
        imageUrl: '',
        release: '',
        designer: '',
        value: ''
    });

    const onChange = (e) => {
        e.preventDefault();
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        await shoeService.create(values);

        navigate('/catalog');
    };

    return (
        <section id="create">
            <div className="form">
                <h2>Add item</h2>
                <form className="create-form" onSubmit={onSubmit}>
                    <input type="text" name="brand" id="shoe-brand" value={values.brand} onChange={onChange} placeholder="Brand" />
                    <input type="text" name="model" id="shoe-model" value={values.model} onChange={onChange} placeholder="Model" />
                    <input type="text" name="imageUrl" id="shoe-img" value={values.imageUrl} onChange={onChange} placeholder="Image url" />
                    <input type="text" name="release" id="shoe-release" value={values.release} onChange={onChange} placeholder="Release date" />
                    <input type="text" name="designer" id="shoe-designer" value={values.designer} onChange={onChange} placeholder="Designer" />
                    <input type="text" name="value" id="shoe-value" value={values.value} onChange={onChange} placeholder="Value" />

                    <button type="submit">post</button>
                </form>
            </div>
        </section>
    );
};