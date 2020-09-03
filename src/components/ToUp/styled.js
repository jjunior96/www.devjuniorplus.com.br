import styled from 'styled-components';
import media from 'styled-media-query';

export const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 0.6rem;
  border-radius: 50%;
  background-color: var(--background-profile-primary);
  color: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 3rem 3.2rem;
  box-shadow: 0 5px 10px #232432;
  transition: color 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    color: #ff7f50;
    box-shadow: 0 5px 20px #171824;
  }

  ${media.lessThan('large')`
    display: none;
  `}
`;
