import React, { useState } from 'react';
import Icon from '../Icons/ReactIcons';

export default function Button(props) {
  const [activeButton, setActiveButton] = useState(false);

  const handleActiveactiveButton = () => {
    return setActiveButton(!activeButton);
  };

  const styleDinamicPrincipalButton = {
    borderRadius: props.radiusPrincipalButton + '%',
    border: props.borderPrincipalButton + 'px solid' + props.colorBorder,
    background: props.backgroundPrincipalButton,
  }

  return (
    <div className={props.activeBackdrop && activeButton ? `backdrop` : null}>
      <button className="button__container" style={styleDinamicPrincipalButton} onClick={handleActiveactiveButton}>
        {!activeButton ? (<Icon iconName={props.iconName} />) : (<Icon iconName={'X'} />)}
      </button>
      <div className="collapse__container">
        {activeButton &&
          props.options.map((option, index) => (
            <a href="" key={index} className="collapse-intern">
              <span className="collapse_option">{option.option} </span>
              <span className="collapse_icon">
                <Icon iconName={option.icon} />
              </span>
            </a>
          ))}
      </div>
    </div>
  );
}
