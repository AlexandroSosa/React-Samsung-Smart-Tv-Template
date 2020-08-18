import React from 'react';

// Modules
import {Focusable} from 'react-js-spatial-navigation';
import {useHistory} from 'react-router-dom';

// Css to change the style of the Focusable Component
import '../App.css';

function Button(props) {
  const history = useHistory();

  const focus = () => {
    console.log('focus');
  };

  const onClick = () => {
    console.log('Clicked on item! ');
    history.push(props.to);
  };

  return (
    <Focusable className="active" onClickEnter={onClick} onFocus={focus}>
      <div>
        jdfsdjfhdh
      </div>
    </Focusable>
  );
}


export default Button;
