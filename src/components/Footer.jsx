import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterComponent = styled.footer`
  width: 100vw;
  max-width: 1000px;
  background-color: var(--white);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Btn = styled.button`
  padding: 15px 30px;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: var(--green);
  }
`;

const Footer = ({ onClick }) => {
  return (
    <FooterComponent>
      <Btn onClick={onClick}>
        <i className="fas fa-bars" />
      </Btn>
      <Link to="/">
        <Btn>
          <i className="far fa-calendar-check" />
        </Btn>
      </Link>
      <Link to="/profile">
        <Btn>
          <i className="fas fa-user" />
        </Btn>
      </Link>
    </FooterComponent>
  );
};

export default Footer;
