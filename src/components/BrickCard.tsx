import React, {useState} from 'react';
import './BrickCard.css';

interface BrickCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
}

const BrickCard: React.FC<BrickCardProps> = ({imgSrc, imgAlt, title, description}) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleCardClick = () => {
        setIsEnlarged(true); // Toggle enlarged state
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsEnlarged(false); // Close the card
        }
    };

    return (
        <>
            {isEnlarged && (
                <div className="backdrop" onClick={handleBackdropClick}>
                    <div className="brick-card-enlarged">
                        <img className="brick-card-image" src={imgSrc} alt={imgAlt}/>
                        <h2 className="brick-card-title">{title}</h2>
                        <p className="brick-card-description-enlarged">{description}</p>
                    </div>
                </div>
            )}
            <div
                className={`brick-card ${isEnlarged ? '' : ''}`}
                onClick={handleCardClick}
            >
                <img className="brick-card-image" src={imgSrc} alt={imgAlt}/>
                <h2 className="brick-card-title">{title}</h2>
                <p className="brick-card-description">{description}</p>
            </div>
        </>
    );
};

export default BrickCard;
