import styled from 'styled-components';
import media from 'styled-media-query';

export const NotificationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  width: 320px;
  font-size: 1.6rem;
  right: calc(40vw - 320px / 2);
  padding: 20px 10px;
  border: 1px solid var(--color-profile-hover);
  background: var(--background-layout-main);
  color: #fff;
  border-radius: 4px;
  animation: moveUp 0.5s ease-in-out both;
  box-shadow: 0 10px 10px #313240;

  @keyframes moveUp {
    0% {
      bottom: -100vh;
    }
    100% {
      bottom: 60px;
    }
  }

  &:hover {
    box-shadow: 0 8px 14px #2a2b39;
    color: var(--color-link-hover);
    cursor: pointer;
  }

  ${media.lessThan('large')`
    right: calc(50vw - 320px / 2);
  `};
`;

export const IconWrapper = styled.div`
  margin-left: 10px;
  color: #fff;
  width: 30px;
  height: 30px;
`;
