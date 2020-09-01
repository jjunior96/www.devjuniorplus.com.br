import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';
import EmailLink from '../EmailLink';

import * as S from './styled';

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />

      <S.SidebarEmailLink>
        <EmailLink />
      </S.SidebarEmailLink>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
