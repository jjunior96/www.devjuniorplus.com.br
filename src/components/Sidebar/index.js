import React from 'react';

import Profile from '../Profile';
import Menu from '../Menu';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import Footer from '../Footer';

import * as S from './styled';

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
      <Menu />

      <S.SidebarFooter>
        <Footer />
      </S.SidebarFooter>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
