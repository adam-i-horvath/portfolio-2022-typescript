import { useState } from 'react';

import styled from 'styled-components';
import LinkList from './component.linklist';

import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

const HamburgerItemsStyle = styled.div`
  .hamburger-menu-items {
    position: fixed;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #ffffff;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .menu-items a {
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 2rem;
  }
`;

const HamburgerMenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000000;
  position: relative;

  .icon_open,
  .icon_close {
    color: #000000;
  }
`;

const MenuItems = () => {
  return (
    <HamburgerItemsStyle>
      <div className="hamburger-menu-items">
        <div className="menu-items">
          <Link to="/">Home</Link>
          <LinkList />
        </div>
      </div>
    </HamburgerItemsStyle>
  );
};

const HamburgerMenu = () => {
  const [showItems, setShowItems] = useState<boolean>(false);

  return (
    <div
      className="hamburger-menu"
      onClick={() => setShowItems((prevItems) => !prevItems)}
    >
      <HamburgerMenuIcon>
        {showItems ? null : (
          <p>
            <MenuIcon style={{ fontSize: 50 }} className="icon_open" />
          </p>
        )}
      </HamburgerMenuIcon>
      {showItems ? <MenuItems /> : null}
    </div>
  );
};

export default HamburgerMenu;
