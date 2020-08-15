import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav``;

export const MenuLinksList = styled.ul`
  font-size: 1.6rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 1rem 0;
  /* font-weight: 100; */

  .active {
    color: var(--color-link-hover);
    /* font-weight: 600; */
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
