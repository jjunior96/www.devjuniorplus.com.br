import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemLink = styled(Link)`
  color: #ddd;
  display: flex;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--color-link-hover);
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--color-line-postitem);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`;

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : '#7159c1')};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
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
