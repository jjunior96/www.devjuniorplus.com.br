import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const ProfileWrapper = styled.section`
  color: var(--color-link-primary);
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

  `}
`;

export const ProfileLink = styled(Link)`
  color: var(--color-link-primary);
  text-decoration: none;
  transition: color 0.3s;

  ${media.lessThan('large')`
    display: flex;
  `}

  &:hover {
    color: var(--color-link-hover);
  }
`;

export const ProfileAuthor = styled.h1`
  margin-top: 0.8rem;
  font-size: 2.4rem;
  /* letter-spacing: 1px; */
  font-family: var(--font-title-main);
  font-weight: 700;
  /* margin: 0.5rem auto 1.5rem; */

  ${media.lessThan('large')`
    font-size: 1.8rem;
    /* margin: 0 0 0 1rem; */
    font-weight: 500;
    letter-spacing: 4px;
  `}
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.6rem;
  font-weight: 300;
  margin-top: 0.3rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 2px;

  ${media.lessThan('large')`
    font-size: 1rem;
    margin-top: 0.6rem;
    letter-spacing: 4px;
  `}
`;

export const ProfileDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan('large')`
    display: none;
  `}
`;
