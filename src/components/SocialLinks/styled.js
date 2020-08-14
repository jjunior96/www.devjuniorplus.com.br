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
  color: var(--color-link-primary);
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--color-link-hover);
  }
`;

export const IconWrapper = styled.div`
  /* fill: #bbb; */
  width: 24px;
  height: 24px;
`;
