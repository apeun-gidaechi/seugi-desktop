import React from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

interface AddEmojiProps {
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
    onSelect: (emoji: EmojiClickData) => void;
}

const Emoji: React.FC<AddEmojiProps> = ({ isOpened, setIsOpened, onSelect }) => {
    const handleEmojiClick = (emoji: EmojiClickData) => {
        onSelect(emoji);
        setIsOpened(false);
    };

    return (
        <div style={{ position: 'absolute', bottom: '0', right: '0', zIndex: 1000 }}>
            {isOpened && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        </div>
    );
};

export default Emoji;
