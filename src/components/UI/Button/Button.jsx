import React from "react";
import { Link } from "react-router-dom";
import './Button.css'

function CustomButton({ children, to, onClick, buttonSize, buttonStyle ,className = ""}) {
  const STYLES = [
    "btn--primary",
    "btn--outline",
    "btn--special",
    "btn--search",
    "btn--tour",
    "btn--search--place",
  ];

  const SIZES = ["btn--medium", "btn--large"];

  // مقادیر نهایی دکمه
  const appliedStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const appliedSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const baseClasses = `btn ${appliedStyle} ${appliedSize} ${className}`; 
    return (
      <Link to={to}>
        <button onClick={onClick} className={baseClasses}>
          {children}
        </button>
      </Link>
  
  );
}

export default CustomButton;
