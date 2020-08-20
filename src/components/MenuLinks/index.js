import React from 'react';

import links from './content';

import * as S from './styled';

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map(link => (
        <S.MenuLinksItem key={Math.random()}>
          <S.MenuLinksLink
            cover
            direction="left"
            bg="#383A47"
            duration={0.7}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
);

export default MenuLinks;
