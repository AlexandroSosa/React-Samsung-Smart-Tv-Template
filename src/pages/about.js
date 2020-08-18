import React, { useEffect } from "react";

// Modules
import { useHistory } from 'react-router-dom';

// Css
import '../App.css';

export default function About() {
  const history = useHistory();

  const keyHandler = (key) => {
    // check if keycode is the return button on the remote and the remove button on your keyboard
    if (key.keyCode === 10009 || key.keyCode === 8) {
      history.goBack()
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  });

  return (
    <div className="container">
      <h2>About</h2>
      <h6 style={{ margin: 0 }}>Press the return button on your remote or Remove button on your keyboard!</h6>
      <h6 style={{ margin: 0 }}>to go back to the previous page!</h6>
    </div>
  );
}