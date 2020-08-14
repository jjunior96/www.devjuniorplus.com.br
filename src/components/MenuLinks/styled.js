import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  font-size: 1.6rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;
  .active {
    color: var(--color-link-hover);
  }
`;

export const MenuLinksLink = styled(Link)`
  color: var(--color-link-primary);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--color-link-hover);
  }
`;
