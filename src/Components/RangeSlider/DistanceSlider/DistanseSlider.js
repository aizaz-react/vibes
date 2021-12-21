import React from "react";
import "./distanseSlider.css";
const DistanseSlider = () => {
  return (
    <div>
      <div class="ticks">
        <span class="tick">Twenty's</span>
        <span class="tick">Middel 20</span>
        <span class="tick">Middle 40</span>
        <span class="tick">Fifty's+</span>
      </div>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          class="slider"
          id="myRange"
          tick="35"
        />
      </div>
    </div>
  );
};

export default DistanseSlider;
