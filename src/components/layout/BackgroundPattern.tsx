import React from "react";

const BackgroundPattern = () => (
  <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            id="pattern-circle"
            cx="20"
            cy="20"
            r="1"
            fill="#374151"
          ></circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
    </svg>
  </div>
);

export default BackgroundPattern;
