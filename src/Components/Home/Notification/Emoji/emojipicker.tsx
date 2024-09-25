import React, { useRef, useEffect } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

interface AddEmojiProps {
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
    onSelect: (emoji: EmojiClickData) => void;
}

const Emoji: React.FC<AddEmojiProps> = ({ isOpened, setIsOpened, onSelect }) => {
    const emojiPickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Element;
            if (
                emojiPickerRef.current &&
                !emojiPickerRef.current.contains(target) &&
                !target.closest('.AddEmojiButton') 
            ) {
                setIsOpened(false);
            }
        };

        if (isOpened) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpened, setIsOpened]);

    const handleEmojiClick = (emoji: EmojiClickData) => {
        onSelect(emoji);
        setIsOpened(false);  
    };

    return (
        <div ref={emojiPickerRef} className="EmojiPickerContainer" style={{ position: 'absolute', top: '10rem', left: '0', zIndex: 999 }}>
            {isOpened && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        </div>
    );
};

export default Emoji;
