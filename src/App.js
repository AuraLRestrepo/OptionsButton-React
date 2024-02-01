import React from 'react';
import OptionsButton from './OptionsButton/OptionsButton';
import './style.css';

export default function App() {
  const optionsButton = [
    { option: 'Puntos de Atención', icon: 'MapPin' },
    { option: 'Chat en Linea', icon: 'MessageCircle' },
    { option: 'Hablemos por WhatsApp', icon: 'Send' },
    { option: 'Llamada con un Asesor', icon: 'PhoneCall' },
    { option: 'Llamanos a Nuestra Linea', icon: 'PhoneOutgoing' },
  ];
  return (
    <div>
      <OptionsButton
        activeBackdrop={true}
        options={optionsButton}
        iconName="Headphones"
        radiusPrincipalButton={50}
        borderPrincipalButton={4}
        colorBorder={'#B9B51C'}
        backgroundPrincipalButton={'#FFFFFF'}
      />
    </div>
  );
}
