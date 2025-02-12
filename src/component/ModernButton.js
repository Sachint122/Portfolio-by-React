import React from 'react';
import styled from 'styled-components';

const Button = ({ text }) => {
  return (
    <StyledWrapper>
      <button className="animated-button cardb" >
        <svg viewBox="0 0 24 24" className="arr-2" style={{ color: '#00d4ff' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
        <span className="text">{text}</span>
        <span className="circle" />
        <svg viewBox="0 0 24 24" className="arr-1" style={{ color: '#00d4ff' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>
      </button>
    </StyledWrapper >
  );
}

const StyledWrapper = styled.div`
 .cardb {
    margin: 15px 0;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #fbd22f;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.animated-button {
    margin-right: 30px;
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 16px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: #fbd22f;
    box-shadow: 0 0 0 2px #fbd22f;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button svg {
    position: absolute;
    width: 24px;
    fill: #fbd22f;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
    right: 0px;
}

.animated-button .arr-2 {
    left: -25%;
}

.animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #fbd22f;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
    padding: 10px 26px;
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
}

.animated-button:hover .arr-1 {
    right: -25%;
}

.animated-button:hover .arr-2 {
    left: 16px;
}

.animated-button:hover .text {
    transform: translateX(12px);
}

.animated-button:hover svg {
    fill: #212121;
}

.animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px #fbd22f;
}

.animated-button:hover .circle {
    width: 100%;
    height: 220px;
    opacity: 1;
}`
export default Button;
