import React from 'react';

import './Styles.scss';

const Button = (props) => {

  return (
    <div className={props.loaderView? "ui loading button" : "submitButton"} onClick={props.handleSubmit} >
      {props.label}
    </div>
  )
}

export default Button;