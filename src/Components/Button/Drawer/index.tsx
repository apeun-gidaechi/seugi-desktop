import React from 'react';

interface DrawerProps {
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ onClose }) => {
  return (
    <div>
      <button onClick={onClose}>Close Drawer</button>
    </div>
  );
};

export default Drawer;