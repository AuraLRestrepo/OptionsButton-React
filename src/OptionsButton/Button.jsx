import React, { useState } from 'react';
import Icon from '../Icons/ReactIcons';

export default function Button(props) {
  const [backdrop, setBackdrop] = useState(false);

  const handleActiveBackdrop = () => {
    return setBackdrop(!backdrop);
  };

  return (
    <div className={props.activeBackdrop && backdrop ? `backdrop` : null}>
      <button className="button__container" onClick={handleActiveBackdrop}>
        <Icon iconName={props.iconName} />
      </button>
      <div className="collapse__container">
        {backdrop &&
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
