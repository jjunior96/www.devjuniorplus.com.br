import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 6rem;
  margin: auto;
  width: 6rem;

  ${media.lessThan('large')`
    height: 3.2rem;
    width: 3.2rem;
    display: none;
  `}
`;
