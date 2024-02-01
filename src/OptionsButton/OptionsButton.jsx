import React, { useState } from 'react';
import Button from '../OptionsButton/Button';
import './OptionsButton.css';

export default function OptionsButton(props) {
  return (
    <Button
      activeBackdrop={props.activeBackdrop}
      options={props.options}
      iconName={props.iconName}
      radiusPrincipalButton={props.radiusPrincipalButton}
      borderPrincipalButton={props.borderPrincipalButton}
      colorBorder={props.colorBorder}
      backgroundPrincipalButton={props.backgroundPrincipalButton}
      collapseOptions={props.collapseOptions}
      txtOptions={props.txtOptions}
    />
  );
}
