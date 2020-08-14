import React from 'react';

import * as S from './styled';

const MenuLinks = () => {
  return (
    <S.MenuLinksWrapper>
      <S.MenuLinkItem to="/">Home</S.MenuLinkItem>
      <S.MenuLinkItem to="/">Sobre Mim</S.MenuLinkItem>
      <S.MenuLinkItem to="/">Categorias</S.MenuLinkItem>
    </S.MenuLinksWrapper>
  );
};

export default MenuLinks;
