import React, { useState, useEffect } from "react";

// Components
import Button from '../components/button';

// Css
import '../App.css';

export default function Home() {
  const [keyCode, setKeyCode] = useState('');

  const keyHandler = (key) => {
    console.log(key.keyCode);
    setKeyCode(key.keyCode);
  };

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  });
  
  return (
    <div>
      <div className="container">
        <h3>Use the remote buttons to see the keycode: {keyCode}</h3>
        <div className="sub-container">
          <Button label="About" to="about" />
          <Button label="Unknown" />
        </div>
      </div>
    </div>
  );
}