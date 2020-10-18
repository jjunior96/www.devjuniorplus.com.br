import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 20px;
  height: auto;
  margin: auto;
  margin-top: 2rem;
  width: 14rem;

  ${media.lessThan('large')`
    display: none;
  `}
`;
