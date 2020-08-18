import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display: flex;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const LayoutMain = styled.main`
  background: var(--background-layout-main);
  transition: background, color 0.5s;
  min-height: 100vh;
  font-size: 1.6rem;
  padding-left: 28rem;
  width: 100%;

  ${media.lessThan('large')`
    padding: 5rem 0 3.2rem 0;
  `}
`;
