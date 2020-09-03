/* eslint-disable no-undef */
import React from 'react';

import { UpArrowAlt } from 'styled-icons/boxicons-regular';
import * as GA from '../MenuBar/trackers';

import * as S from './styled';

const ToUp = () => {
  return (
    <S.IconWrapper
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
    </S.IconWrapper>
  );
};

export default ToUp;
