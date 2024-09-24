import React from 'react';
import {useLocation} from 'react-router-dom';
import './BrickProductPage.css';

const BrickProductPage: React.FC = () => {
    const location = useLocation();
    const {imgSrc, imgAlt, title, description} = location.state || {};

    if (!title || !imgSrc) {
        return <div>No product data available</div>;
    }

    return (
        <div className={"brick-product-page"}>
            <h2 className={"brick-card-title"}>{title} </h2>
            <img className={"brick-product-page-image"} src={imgSrc} alt={imgAlt}/>
            <p className={"brick-product-page-description"}>{description}</p>

        <label htmlFor="text-field">Enter some text:</label>
        <input
            type="text"
            id="text-field"

            placeholder="Type something here..."
        />
        {/*<p>Input value: {inputValue}</p> /!* Display the input value *!/*/}
    </div>
)
    ;
};

export default BrickProductPage;
