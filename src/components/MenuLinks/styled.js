import styled from 'styled-components';
import { Link } from 'gatsby';

export const MenuLinksWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuLinkItem = styled(Link)`
  font-size: 1.6rem;
  color: var(--color-link-primary);
  margin-left: 2rem;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: var(--color-link-hover);
  }
`;
