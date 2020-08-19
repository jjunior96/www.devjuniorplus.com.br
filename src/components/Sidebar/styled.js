import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--background-profile-primary);
  height: 100vh;
  position: fixed;
  /* padding: 2rem; */
  text-align: center;
  width: 28rem;

  ${media.lessThan('large')`
    align-items: flex-start;
    width: 100%
    height: auto;
    padding: 1.8rem 2.4rem;
    background-color: var(--background-layout-mobile);
    box-shadow: 0 0 20px #242630d2;
    z-index: 999;
  `}
`;
