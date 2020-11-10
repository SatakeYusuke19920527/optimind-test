import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <HeaderArea>
        <Header />
      </HeaderArea>
      <Body>{children}</Body>
      <FooterArea>
        <Footer />
      </FooterArea>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 70vw;
  height: 100vh;
  background-color: #f6f6ef;
  margin: auto;
`;

const HeaderArea = styled.div`
  width: 70vw;
  height: 3vh;
`;

const Body = styled.div`
  width: 70vw;
  height: 87vh;
`;

const FooterArea = styled.div`
  width: 70vw;
  height: 10vh;
`;
