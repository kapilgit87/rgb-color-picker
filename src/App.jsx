import { useState } from "react";
import "./App.css";

function App() {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div className="container">
      <h2 className="title">🎨 RGB Color Picker in React 19</h2>

      <div
        className="color-box"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      ></div>

      <p className="rgb-text">
        rgb({r}, {g}, {b})
      </p>

      <div className="slider">
        <label>Red: {r}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={r}
          onChange={(e) => setR(Number(e.target.value))}
        />
      </div>

      <div className="slider">
        <label>Green: {g}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={g}
          onChange={(e) => setG(Number(e.target.value))}
        />
      </div>

      <div className="slider">
        <label>Blue: {b}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App;
