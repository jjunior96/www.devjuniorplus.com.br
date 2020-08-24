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
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%
    height: auto;
    padding: 1.8rem 2.4rem;
    background-color: var(--background-layout-mobile);
    box-shadow: 0 0 20px #242630d2;
    z-index: 999;
  `}
`;

export const SidebarFooter = styled.section`
  position: fixed;
  bottom: 0;
  margin-bottom: 4rem;
  padding: 1rem 0;

  border-bottom: 1px solid #ff7f50;

  ${media.lessThan('large')`
    display: none;
  `}
`;
