

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState([]);
  const [saturation, setSaturation] = useState(80); 

  
  useEffect(() => {
    const generated = [];
    for (let i = 0; i < 8; i++) {
      const hue = Math.floor((360 / 8) * i);
      generated.push(`hsl(${hue}, ${saturation}%, 60%)`);
    }
    setColors(generated);

   
    setColor(`hsl(0, ${saturation}%, 60%)`);
  }, [saturation]);

  
  const handleSaturationChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setSaturation(value);
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>

      <div className="saturation-input">
        <label>
          Saturation (%):
          <input
            type="number"
            value={saturation}
            onChange={handleSaturationChange}
            min="0"
            max="100"
          />
        </label>
      </div>

      <div
        className="color-display"
        style={{ backgroundColor: color }}
      >
        Selected Color: {color}
      </div>

      <p className="select-label">Select Color</p>
      <div className="color-options">
        {colors.map((c) => (
          <label key={c} className="radio-color">
            <input
              type="radio"
              name="color"
              value={c}
              checked={color === c}
              onChange={(e) => setColor(e.target.value)}
            />
            <span
              className="color-swatch"
              style={{ backgroundColor: c }}
            ></span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default App;