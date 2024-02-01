import React from 'react';
import OptionsButton from './OptionsButton/OptionsButton';
import './style.css';

export default function App() {
  const optionsButton = [
    { option: 'Puntos de Atención', icon: 'MapPin', page: '' },
    { option: 'Chat en Linea', icon: 'MessageCircle', page: '' },
    { option: 'Hablemos por WhatsApp', icon: 'Send', page: '' },
    { option: 'Llamada con un Asesor', icon: 'PhoneCall', page: '' },
    { option: 'Llamanos a Nuestra Linea', icon: 'PhoneOutgoing', page: '' },
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
        collapseOptions={{
          color:'#737373',
          background:'#f4f4f4',
          borderRadius:'100',
          border:'1',
          colorBorder:'#404040'
        }}
        txtOptions={{
          color: '#fff',
          fontWeight: 500,
        }}
      />
    </div>
  );
}
