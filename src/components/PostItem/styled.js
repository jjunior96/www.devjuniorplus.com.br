import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  color: var(--color-profile-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  max-width: 1600px;
  margin: 0 auto;
  transition: color 0.4s;
  cursor: default;
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  border: 1px solid var(--color-line-postitem);
  display: flex;
  padding: 2rem 3rem;
  width: 95%;
  box-shadow: 0 10px 10px #313240;
  border-radius: 20px;
  margin: 1.2rem 0 1.2rem;
  transition: box-shadow 0.4s, color 0.4s;

  &:hover {
    box-shadow: 0 14px 20px #2a2b39;
    color: var(--color-link-hover);
    cursor: pointer;
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2.4rem 1.6rem;
  `};
`;

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : '#7159c1')};
  border-radius: 20px;
  color: #fff;
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan('large')`
    border-radius: 8px;
    font-size: 1.6rem;
    min-height: auto;
    min-width: auto;
    padding: .8rem 1rem;
    margin-bottom: 1rem;
  `}
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const PostItemDate = styled.time`
  font-size: 1.2rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0.6rem 0 1rem;
`;

export const PostItemDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1.2;
`;
