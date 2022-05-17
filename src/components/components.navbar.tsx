import { useState, useEffect } from 'react';

import styled from 'styled-components';

import HamburgerMenu from './components.hamburgermenu';
import SimpleMenu from './components.simplemenu';

import { Link } from 'react-router-dom';

const NavbarStyle = styled.div`
  font-weight: 700;
  font-size: 2rem;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--white);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  a {
    color: #000000;
    text-decoration: none;
    padding: 24px;
  }
  a:hover {
    color: var(--red);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function Navbar() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);
  if (screenSize.dynamicWidth > 1024) {
    return (
      <>
        <NavbarStyle>
          <Link to="/">!Adam</Link>
          <SimpleMenu />
        </NavbarStyle>
      </>
    );
  } else {
    return (
      <>
        <NavbarStyle>
          <Link to="/">!Adam</Link>
          <HamburgerMenu />
        </NavbarStyle>
      </>
    );
  }
}
