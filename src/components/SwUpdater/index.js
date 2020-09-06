/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { Refresh } from 'styled-icons/evil';

import * as S from './styled';

const SwUpdater = () => {
  return (
    <S.NotificationWrapper onClick={() => window.location.reload()}>
      <p>Tem uma atualização disponível.</p>
      <S.IconWrapper>
        <Refresh />
      </S.IconWrapper>
    </S.NotificationWrapper>
  );
};

export default SwUpdater;
