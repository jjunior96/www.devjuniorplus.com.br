/* eslint-disable no-undef */
import React from 'react';

import { Home } from 'styled-icons/remix-fill/';
import { UpArrow } from 'styled-icons/boxicons-solid';
import { Search } from 'styled-icons/boxicons-regular';

import * as GA from './trackers';
import * as S from './styled';

const MenuBar = () => {
  return (
    <S.MenuBarWrapper>
      <S.MenuBarList>
        <S.MenuBarItem>
          <S.MenuBarLink
            to="#"
            cover
            direction="top"
            bg="#383A47"
            duration={0.7}
            activeClassName="active"
            title="Pesquisar"
          >
            <Search />
          </S.MenuBarLink>
        </S.MenuBarItem>

        <S.MenuBarItem>
          <S.MenuBarLink
            to="/"
            cover
            direction="top"
            bg="#383A47"
            duration={0.7}
            activeClassName="active"
            title="Voltar para Home"
          >
            <Home />
          </S.MenuBarLink>
        </S.MenuBarItem>

        <S.MenuBarItem>
          <S.MenuBarLink
            to="#"
            cover
            direction="top"
            bg="#383A47"
            duration={0.7}
            activeClassName="active"
            title="Topo de página"
            onClick={() => {
              GA.topClickTrack();
              window.scroll({ top: 0, behavior: 'smooth' });
            }}
          >
            <UpArrow />
          </S.MenuBarLink>
        </S.MenuBarItem>
      </S.MenuBarList>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
