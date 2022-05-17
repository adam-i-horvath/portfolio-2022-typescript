import styled from 'styled-components';

const year = new Date().getFullYear();

const FooterStyle = styled.footer`
  text-align: center;
  background-color: var(--lightgray);
  position: fixed;
  width: 100%;
  bottom: 0px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
`;

const Footer = () => {
  return (
    <FooterStyle className="footer">Portfolio project © {year}</FooterStyle>
  );
};

export default Footer;
