import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  margin: 2.4rem auto;
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: #e1e5ee;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #767b91;
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`;
