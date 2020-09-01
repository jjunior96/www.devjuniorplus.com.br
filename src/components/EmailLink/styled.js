import styled from 'styled-components';
import media from 'styled-media-query';

export const EmailWrapper = styled.div`
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const EmailLink = styled.a`
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
