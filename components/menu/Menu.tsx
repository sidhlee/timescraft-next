import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled('div')``;

type MenuProps = {};

const Menu: React.FC<MenuProps> = ({}) => {
  return (
    <StyledMenu className="menu backdrop hidden">
      <div className="menu-content">
        <div className="menu-main">
          <p className="menu-title">Game Menu</p>
          <div className="menu-buttons">
            <button className="btn btn-resume">Back to Game</button>
            <button className="btn btn-again">Try Again!</button>
            <button className="btn btn-main">Main</button>

            <button className="btn btn-reset">Reset Score</button>
          </div>
        </div>
        <div className="reset-confirm hidden">
          <p className="menu-title">
            Are you sure you want to delete all game data and reset score?
          </p>
          <div className="menu-buttons">
            <button className="btn btn-confirm-yes">Reset</button>
            <button className="btn btn-confirm-no">Cancel</button>
          </div>
        </div>
        <div className="reset-message hidden">
          <p className="menu-title">Score has been reset.</p>
        </div>
      </div>
    </StyledMenu>
  );
};

export default Menu;
