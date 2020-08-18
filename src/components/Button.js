import React from 'react';

// Modules
import {Focusable} from 'react-js-spatial-navigation';
import {useHistory} from 'react-router-dom';

// Css to change the style of the Focusable Component
import '../css/button.css';

function Button(props) {
  const history = useHistory();

  const focus = () => {
    console.log('focused');
  };

  const onClick = () => {
    console.log('Clicked on item!');
    history.push(props.to);
  };

  return (
    <Focusable className="button" onClickEnter={onClick} onFocus={focus}>
      <p className="text">
        {props.label}
      </p>
    </Focusable>
  );
}


export default Button;
