import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';
import MenuLinks from '../MenuLinks';

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
        {/* Left */}
        <S.ProfileLink to="/">
          <Avatar />
          {title}
        </S.ProfileLink>

        {/* Right */}
        <MenuLinks />
      </S.ProfileMax>
    </S.ProfileWrapper>
  );
};

export default Profile;
