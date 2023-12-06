export const ItemCard = () => {
    return (
        <li className="card">
            <img src="./images/travis.jpg" alt="travis" />
            <p>
                <strong>Brand: </strong><span className="brand">Air Jordan</span>
            </p>
            <p>
                <strong>Model: </strong><span className="model">1 Retro High TRAVIS SCOTT</span>
            </p>
            <p><strong>Value:</strong><span className="value">2000</span>$</p>
            <a className="details-btn" href="">Details</a>
        </li>
    );
};