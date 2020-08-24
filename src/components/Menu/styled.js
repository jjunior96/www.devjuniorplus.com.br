import styled from 'styled-components';
import media from 'styled-media-query';

export const MenuWrapper = styled.div`
  display: none;

  ${media.lessThan('large')`
    display: flex;
    width: 42px;
    height: 42px;
  `}
`;
