import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import * as S from './styled';

const Layout = () => {
  return (
    <S.LayoutWrapper>
      <Header />
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
