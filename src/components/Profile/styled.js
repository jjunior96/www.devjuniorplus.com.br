import styled from 'styled-components';
import { Link } from 'gatsby';

export const ProfileWrapper = styled.section`
  color: var(--color-profile-primary);
  display: flex;
  width: 100%;
  background-color: var(--background-profile-primary);
  height: 6.8rem;
`;

export const ProfileMax = styled.nav`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
`;

export const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--color-profile-primary);
  text-decoration: none;
  transition: color 0.3s;
  margin-left: 1.6rem;
  font-size: 2rem;

  &:hover {
    color: var(--color-profile-hover);
  }
`;
