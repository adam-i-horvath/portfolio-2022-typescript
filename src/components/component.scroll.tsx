import React, { useState, useEffect } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../index.css';

import styled from 'styled-components';

const ScrollStyle = styled.div`
  .top-to-btm {
    position: relative;
  }
  .icon-position {
    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 1;
  }
  .icon-style {
    background-color: var(--orange);
    height: 50px;
    width: 50px;
    color: #fff;
    cursor: pointer;
    animation: movebtn 3s ease-in-out infinite;
    transition: all 0.5s ease-in-out;
  }
  .icon-style:hover {
    animation: none;
    background: var(--darkgray);
  }
`;

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <ScrollStyle>
      <div className="top-to-btm">
        {showTopBtn && (
          <ArrowUpwardIcon
            className="icon-position icon-style"
            onClick={toTop}
          />
        )}
      </div>
    </ScrollStyle>
  );
};
export default ScrollToTop;
