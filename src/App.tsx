import React from 'react';
import BrickCard from './components/BrickCard';
import './App.css';
import localImage from './utils/clipart4248425.png';

const App: React.FC = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    const cards = new Array(16).fill({
        imgSrc: localImage,
        imgAlt: "Placeholder Image",
        title: "Brick Card Example",
        description: "This is an example of the BrickCard component with an image, title, and description.",
        buttonText: "Click Me",
    });

    return (
        <div className="card-container">
            {cards.map((card, index) => (
                <BrickCard
                    key={index}
                    imgSrc={card.imgSrc}
                    imgAlt={card.imgAlt}
                    title={card.title}
                    description={card.description}
                    buttonText={card.buttonText}
                    onButtonClick={handleClick}
                />
            ))}
        </div>
    );
};

export default App;



