import React from 'react';
import * as Icon from 'react-feather';

export default function ReactIcons(props) {
  const { iconName } = props;
  const IconComponent = Icon[iconName] || Icon['HelpCircle'];
  return <IconComponent />;
}
