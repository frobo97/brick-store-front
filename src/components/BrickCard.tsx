import React from 'react';
import './BrickCard.css';

interface BrickCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    buttonText?: string;
    onButtonClick?: () => void;
}

const BrickCard: React.FC<BrickCardProps> = (
    {
        imgSrc,
        imgAlt,
        title,
        description,
        buttonText = "Learn More",
        onButtonClick
    }) => {
    return (
        <div className="brick-card">
            <img src={imgSrc} alt={imgAlt} className="brick-card-image"/>
            <h2 className="brick-card-title">{title}</h2>
            <p className="brick-card-description">{description}</p>
            {onButtonClick && (
                <button className="brick-card-button" onClick={onButtonClick}>
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default BrickCard;
