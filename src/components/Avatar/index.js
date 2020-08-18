import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 80, maxHeight: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />;
};

export default Avatar;
