/* eslint-disable import/no-duplicates */
/* eslint-disable no-undef */
import React from 'react';

// import { Home } from 'styled-icons/remix-fill/';
import { Home } from 'styled-icons/typicons';
import { UpArrowAlt } from 'styled-icons/boxicons-regular';
import { AboutDotMe } from '@styled-icons/simple-icons';
import { Search } from 'styled-icons/boxicons-regular';

import * as GA from './trackers';
import * as S from './styled';

const MenuBar = () => {
  return (
    <S.MenuBarWrapper>
      <S.MenuBarList>
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
            to="/about"
            cover
            direction="top"
            bg="#383A47"
            duration={0.7}
            activeClassName="active"
            title="Ir para About"
          >
            <AboutDotMe />
          </S.MenuBarLink>
        </S.MenuBarItem>

        <S.MenuBarItem>
          <S.MenuBarLink
            to="/search"
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
            <UpArrowAlt />
          </S.MenuBarLink>
        </S.MenuBarItem>
      </S.MenuBarList>
    </S.MenuBarWrapper>
  );
};

export default MenuBar;
