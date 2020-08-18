import styled from 'styled-components';
import media from 'styled-media-query';

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  color: var(--background-layout-main);
  padding: 2.4rem 4rem;
  justify-content: space-between;

  a {
    color: var(--color-link-primary);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--color-link-hover);
    }
  }

  ${media.lessThan('large')`
    font-size: 1.2rem;
    padding: 1.6rem;
  `}
`;
