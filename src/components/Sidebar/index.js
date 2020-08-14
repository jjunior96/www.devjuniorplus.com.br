import React from 'react';

import Profile from '../Profile';
import MenuLinks from '../MenuLinks';

import * as S from './styled';

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      {/* <SocialLinks /> */}
      <MenuLinks />
    </S.SidebarWrapper>
  );
};

export default Sidebar;
