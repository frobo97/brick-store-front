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

    const [comment, setComment] = useState(''); // State for the input field
    const [comments, setComments] = useState<string[]>([]); // State for the list of comments

    // Handle input field change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    // Handle adding the comment
    const handleAddComment = () => {
        if (comment.trim()) { // Prevent empty comments
            setComments([...comments, comment]); // Add comment to the list
            setComment(''); // Clear the input field
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

                        <button className="add-comment-button" onClick={handleAddComment}>
                            Add Comment
                        </button>

                        <input
                            className="input-field"
                            type="text"
                            value={comment}
                            onChange={handleInputChange}
                            placeholder=" Whrite a comment"
                        />

                        <div className="comments-list">
                            {comments.length > 0 ? (
                                comments.map((cmt, index) => (
                                    <p key={index} className="comment">
                                        {cmt}
                                    </p>
                                ))
                            ) : (
                                <p>No comments yet</p>
                            )}
                        </div>
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
