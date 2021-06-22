import React from 'react';
import './index.scss';

const SubstrataButton = (props) => {
  const { children, onClick } = props;

  return (
    <button type="button" onClick={onClick} className="substrata-button">
      {children}
    </button>
  );
};

export default SubstrataButton;
