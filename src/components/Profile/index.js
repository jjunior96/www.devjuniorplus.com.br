import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `);

  return (
    <S.ProfileWrapper>
      <S.ProfileMax>
        <S.ProfileLink to="/">
          <Avatar />
          {title}
        </S.ProfileLink>
      </S.ProfileMax>
    </S.ProfileWrapper>
  );
};

export default Profile;
