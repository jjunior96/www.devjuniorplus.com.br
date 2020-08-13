import styled from 'styled-components';
import { Link } from 'gatsby';

export const ProfileWrapper = styled.section`
  color: var(--color-profile-primary);
  display: flex;
  flex-direction: column;
`;

export const ProfileLink = styled(Link)`
  color: var(--color-profile-primary);
  text-decoration: none;
  transition: color 0.3s;
  font-size: 1.6rem;

  &:hover {
    color: var(--color-profile-hover);
  }
`;
