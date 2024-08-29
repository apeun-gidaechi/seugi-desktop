import React from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

interface AddEmojiProps {
    onSelect: (emoji: EmojiClickData) => void;
}

const Emoji: React.FC<AddEmojiProps> = ({ onSelect }) => {
    return (
        <div>
            <EmojiPicker  />
        </div>
    );
};

export default Emoji;
