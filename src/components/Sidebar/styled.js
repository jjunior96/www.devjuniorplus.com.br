import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--background-profile-primary);
  margin: 2rem 2rem;
  height: 95vh;
  position: fixed;
  text-align: center;
  width: 26rem;
  border-radius: 20px;
  box-shadow: 0 10px 10px #313240;

  ${media.lessThan('large')`
    margin: 0;
    border-radius: 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%
    height: auto;
    padding: 1.8rem 2.4rem;
    background-color: var(--background-layout-mobile);
    box-shadow: 0 0 20px #242630d2;
    z-index: 999;
  `}
`;

export const SidebarEmailLink = styled.section`
  position: fixed;
  bottom: 0;
  margin-bottom: 5rem;
  padding: 1rem 0;

  border-bottom: 1px solid #ff7f50;

  ${media.lessThan('large')`
    display: none;
  `}
`;
