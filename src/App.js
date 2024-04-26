import React, { useState, useEffect } from 'react';
import Pizzicato from 'pizzicato';
import './App.css';

const sounds = {
  C: new Pizzicato.Sound({ source: 'wave', options: { frequency: 261.63 } }),
  D: new Pizzicato.Sound({ source: 'wave', options: { frequency: 293.66 } }),
  E: new Pizzicato.Sound({ source: 'wave', options: { frequency: 329.63 } }),
  F: new Pizzicato.Sound({ source: 'wave', options: { frequency: 349.23 } }),
  G: new Pizzicato.Sound({ source: 'wave', options: { frequency: 392.00 } }),
  A: new Pizzicato.Sound({ source: 'wave', options: { frequency: 440.00 } }),
  B: new Pizzicato.Sound({ source: 'wave', options: { frequency: 493.88 } }),
  H: new Pizzicato.Sound({ source: 'wave', options: { frequency: 193.88 } }),
  I: new Pizzicato.Sound({ source: 'wave', options: { frequency: 103.88 } }),
  J: new Pizzicato.Sound({ source: 'wave', options: { frequency: 253.88 } }),
  K: new Pizzicato.Sound({ source: 'wave', options: { frequency: 593.88 } })
};

function App() {
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    for (let key in sounds) {
      sounds[key].volume = volume / 100;
    }
  }, [volume]);

  const playSound = (note) => {
    const sound = sounds[note];
    sound.stop();
    sound.play();
    setTimeout(() => {
      sound.stop();
    }, 1500);
  };

  return (
    <div className="App">
      <div className="volume-control">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(event) => setVolume(event.target.value)}
        />
      </div>
      <div className="keyboard">
        <button className="key" onClick={() => playSound('C')}>C</button>
        <button className="key" onClick={() => playSound('D')}>D</button>
        <button className="key" onClick={() => playSound('E')}>E</button>
        <button className="key" onClick={() => playSound('F')}>F</button>
        <button className="key" onClick={() => playSound('G')}>G</button>
        <button className="key" onClick={() => playSound('A')}>A</button>
        <button className="key" onClick={() => playSound('B')}>B</button>
        <button className="key" onClick={() => playSound('H')}>H</button>
        <button className="key" onClick={() => playSound('I')}>I</button>
        <button className="key" onClick={() => playSound('J')}>J</button>
        <button className="key" onClick={() => playSound('K')}>K</button>
      </div>
    </div>
  );
}

export default App;
