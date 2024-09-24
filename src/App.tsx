import React, {useState} from 'react';
import BrickCard from './components/BrickCard';
import './App.css';
import localImage from './utils/clipart4248425.png';

const App: React.FC = () => {
    // Track the index of the enlarged card
    const [enlargedCardIndex] = useState<number | null>(null);

    // Example card data todo this will come from a json / the backend
    const cards = new Array(8).fill({
        imgSrc: localImage,
        imgAlt: "Placeholder Image",
        title: "Brick Card Example",
        description: "This is an example of the BrickCard component with an image, title, and description. Aenean nec felis eu arcu tristique aliquam. Duis egestas nisi risus, ac vestibulum nisi gravida in. Sed suscipit felis non mi sagittis, sed pharetra ligula tincidunt. Vivamus dictum at nunc sed facilisis. Aliquam tempor malesuada neque, et fermentum est aliquet vel. Cras ac felis id lorem suscipit luctus vel id ipsum. ",
    });

    return (
        <div className={`card-container ${enlargedCardIndex !== null ? 'blur-background' : ''}`}>
            {cards.map((card, index) => (
                <BrickCard
                    key={index}
                    imgSrc={card.imgSrc}
                    imgAlt={card.imgAlt}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    );
};

export default App;

