import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Item>
        <Link to="/" className="Text">
          <Text>Hackrer News</Text>
        </Link>
      </Item>
      |
      <Item>
        <Link to="/jobs">jobs</Link>
      </Item>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
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
