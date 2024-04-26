// KeyboardEventHandler.js
import { useEffect } from 'react';

const keyNotesMap = {
  'a': 'C',
  's': 'D',
  'd': 'E',
  'f': 'F',
  'g': 'G',
  'h': 'A',
  'j': 'B',
};

function Key({ playSound }) {
  const handleKeyDown = (event) => {
    const keyPressed = event.key.toLowerCase();
    if (keyNotesMap[keyPressed]) {
      playSound(keyNotesMap[keyPressed]);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [playSound]);

  return null;
}

export default Key;
