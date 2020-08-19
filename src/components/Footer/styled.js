import styled from 'styled-components';

export const FooterWrapper = styled.footer``;

export const FooterEmail = styled.a`
  text-decoration: none;
  font-family: var(--font-title-position);
  font-weight: 100;
  font-size: 1.4rem;
  color: var(--color-link-primary);

  transition: color 0.5s;

  &:hover {
    color: var(--color-link-hover);
  }
`;
