import React from 'react';
import styled from 'styled-components';

const StyledMenuButton = styled('button')``;

type MenuButtonProps = {};

const MenuButton: React.FC<MenuButtonProps> = ({}) => {
  return (
    <StyledMenuButton className="menu-btn hidden">
      <span></span>
    </StyledMenuButton>
  );
};

export default MenuButton;
