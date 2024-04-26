import React from 'react';
import Slider from '@mui/material/Slider';

function VolumeControl({ volume, setVolume }) {
  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <div>
      <Slider
        value={volume}
        onChange={handleChange}
        min={0}
        max={100}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}

export default VolumeControl;
