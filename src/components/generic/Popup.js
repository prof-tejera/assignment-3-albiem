import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  z-index: 100;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 2px 5px;
`;

const Popup = ({ children, isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <PopupContainer>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      {children}
    </PopupContainer>
  );
};

export default Popup;