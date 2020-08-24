import styled from 'styled-components';
import media from 'styled-media-query';

export const SocialLinksWrapper = styled.nav`
  margin: 3rem auto 2.4rem;
  padding: 0 2rem;
  max-width: 820px;

  ${media.lessThan('large')`
    padding: 1.2rem 2.8rem;
    margin: 0 0 3rem;
    bottom: 0;
    width: 100vw;
  `}
`;

export const SocialLinksList = styled.ul`
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

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
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
