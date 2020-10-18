import styled from 'styled-components';
import media from 'styled-media-query';

export const ShareWrapper = styled.div`
  right: 0;
  position: fixed;
  top: 0;
  right: 0;
  margin: 0 3rem 3.2rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 12%;

  ${media.lessThan('large')`
    flex-direction: row;
    margin-top: 10rem;
    position: relative;
    padding: 5rem 6.4rem 3rem;
    align-items: center;
    max-width: 70rem;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    height: 4rem;
  `};
`;

export const ShareTitle = styled.h2`
  margin: 4rem 0 2rem;
  color: var(--hightlight-quote);
  font-size: 2.4rem;
  font-weight: bold;
`;

export const ShareList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  ${media.lessThan('large')`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const ShareItem = styled.li``;

export const ShareLink = styled.a`
  color: var(--color-link-primary);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    background-color: var(--color-link-hover);
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 8px;
  opacity: 0.5;
  transition: opacity 0.5s, filter 0.5s;
  filter: saturate(0%);

  &:hover {
    opacity: 1;
    filter: saturate(100%);
    box-shadow: 0 5px 10px #232432;
    border-radius: 50%;
  }

  ${media.lessThan('large')`
    margin-left: 8px;
    opacity: 1;
    filter: saturate(100%);
  `}
`;
