import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const ProfileWrapper = styled.section`
  color: var(--color-link-primary);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(Link)`
  color: var(--color-link-primary);
  text-decoration: none;
  transition: color 0.3s;

  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}

  &:hover {
    color: var(--color-link-hover);
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 2.4rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan('large')`
    font-size: 1.6rem;
    margin: 0 0 0 1rem;
  `}
`;

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.8rem;
  font-weight: 300;

  ${media.lessThan('large')`
    font-size: 1.2rem;
    margin-top: 0.6rem;
  `}
`;

export const ProfileDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan('large')`
    display: none;
  `}
`;
