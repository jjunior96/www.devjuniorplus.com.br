import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  width: 100%;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.6rem;
  font-weight: 300;
  width: 100%;
`;

export const MenuLinksItem = styled.li`
  display: flex;
  width: 100%;

  .active {
    color: var(--color-link-hover);
    background-image: linear-gradient(to left, #383a47, #46495a);
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--color-link-primary);
  letter-spacing: 3px;
  text-decoration: none;
  transition: color 0.5s;
  width: 100%;
  padding: 1.6rem 0;

  &:hover {
    color: var(--color-link-hover);
  }
`;
