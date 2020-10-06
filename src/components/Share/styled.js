import styled from 'styled-components';
import media from 'styled-media-query';

export const ShareWrapper = styled.div`
  display: flex;
  padding: 5rem 6.4rem 3rem;
  align-items: center;
  max-width: 70rem;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  height: 4rem;
  /* border: 1px solid var(--hightlight-quote); */
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
  width: 32px;
  height: 32px;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.5s;

  &:hover {
    background-color: var(--color-link-hover);
    color: var(--background-profile-primary);
  }
`;
