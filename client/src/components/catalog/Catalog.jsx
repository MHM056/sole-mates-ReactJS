import { useEffect, useState } from "react";
import * as shoeService from "../../services/shoeService";
import { ItemCard } from "./item-card/ItemCard";

export const Catalog = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        shoeService.getAll()
        .then(setShoes);
    }, []);

    return (
        <section id="dashboard">
            <h2>Collectibles</h2>
            <ul className="card-wrapper">
                {/* <!-- Display a li with information about every post (if any)--> */}
                {shoes.map(shoe => <ItemCard key={shoe._id} {...shoe}/>)}
            </ul>

            {shoes.length === 0 && <h2>There are no items added yet.</h2>}
        </section>
    );
};