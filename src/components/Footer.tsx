import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Item>
        <Link to="/" className="Text">
          <Text>Hackrer News</Text>
        </Link>
      </Item>
      |
      <Item>
        <Link to="/welcome">Welcome</Link>
      </Item>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  background-color: #ff6602;
`;

const Item = styled.div`
  padding: 0 1em;
  text-decoration: none;
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0;
`;
