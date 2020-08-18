import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.6rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 1rem 0;

  .active {
    color: var(--color-link-hover);
  }
`;

export const MenuLinksLink = styled(Link)`
  color: var(--color-link-primary);
  letter-spacing: 3px;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--color-link-hover);
  }
`;
