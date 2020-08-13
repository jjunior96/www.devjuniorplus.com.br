import React from 'react';

import Header from '../Header';
import Profile from '../Profile';
import Footer from '../Footer';

import * as S from './styled';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <Profile />
      <Header />
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
