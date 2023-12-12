import { useState } from "react";
import * as shoeService from "../../services/shoeService";
import ItemCard from "../catalog/item-card/ItemCard";

export default function Search() {
    const [foundItem, setFoundItem] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const onChange = (e) => {
        setSearchValue(e.target.value);
    };

    const onSearchSubmit = async (e) => {
        e.preventDefault();

        const result = await shoeService.search(searchValue);

        setFoundItem(result);

        setSearchValue('');
    };

    return (
        <section id="search">
            <h2>Search by Brand</h2>

            <form className="search-wrapper cf" onSubmit={onSearchSubmit}>
                <input id="#search-input" value={searchValue} onChange={onChange} type="text" name="search" placeholder="Search here..." required />
                <button type="submit">Search</button>
            </form>

            <h3>Results:</h3>

            <div id="search-container">
                <ul className="card-wrapper">
                    {foundItem.map(item => <ItemCard key={item._id} {...item} />)}
                </ul>
            </div>

            {foundItem.length === 0 && <h2>There are no results found.</h2>}
        </section>
    );
};