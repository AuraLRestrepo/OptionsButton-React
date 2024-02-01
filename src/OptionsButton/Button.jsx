import React, { useState, useEffect } from 'react';
import Icon from '../Icons/ReactIcons';

export default function Button(props) {
  const [activeButton, setActiveButton] = useState(false);

   const handleActiveactiveButton = () => {
    return (
      setTimeout(() => {
        setActiveButton(!activeButton)
      }, 100)
    );
  };

  const styleDinamicPrincipalButton = {
    borderRadius: props.radiusPrincipalButton + '%',
    border: props.borderPrincipalButton + 'px solid' + props.colorBorder,
    background: props.backgroundPrincipalButton,
  }

  const styleDinamicCollapseOptions = {
    background: props.collapseOptions.backgroud || '#FFF',
    color: props.collapseOptions.color,
    border: props.collapseOptions.border + 'px solid' + props.collapseOptions.colorBorder,
    borderRadius: props.collapseOptions.borderRadius + 'px'
  }

  const styleDinamicTxtOptions = {
    color: props.txtOptions.color,
    fontWeight: props.txtOptions.fontWeight || 400
  }

  return (
    <div className={props.activeBackdrop && activeButton ? `backdrop` : null}>
      <button className="button__container" style={styleDinamicPrincipalButton} onClick={handleActiveactiveButton}>
        {!activeButton ? (<Icon iconName={props.iconName} />) : (<Icon iconName={'X'} />)}
      </button>
      <div className="collapse__container">
        {activeButton &&
          props.options.map((option, index) => (
            <a onClick={option.page} key={index}  className={!activeButton ? 'uncollapse-intern' : 'collapse-intern'}>
              <span style={styleDinamicTxtOptions} className="collapse_option">{option.option} </span>
              <span style={styleDinamicCollapseOptions} className="collapse_icon">
                <Icon iconName={option.icon} />
              </span>
            </a>
          ))}
      </div>
    </div>
  );
}
