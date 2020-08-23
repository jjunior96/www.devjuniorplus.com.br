import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuBarWrapper = styled.nav`
  display: none;

  ${media.lessThan('large')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: var(--background-social-links);
    margin: 0;
    padding: 1.2rem 2.8rem;
    bottom: 0;
    z-index: 999;
  `}
`;

export const MenuBarList = styled.ul`
  ${media.lessThan('large')`
    display: flex;
    margin: 0 auto;
    margin-left: -1.2rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const MenuBarItem = styled.li`
  ${media.lessThan('large')`
    width: 2.4rem;
    height: 2.4rem;

    .active {
      color: var(--color-link-hover);
    }
  `}
`;

export const MenuBarLink = styled(AniLink)`
  ${media.lessThan('large')`
    padding: 1rem;  
    color: var(--color-link-primary);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: var(--color-link-hover);
      
    }
  `}
`;
