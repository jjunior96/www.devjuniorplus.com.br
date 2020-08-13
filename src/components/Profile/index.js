import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

import * as S from './styled';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, author, description },
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
      <S.ProfileLink to="/">
        <Avatar />
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{description}</p>
      </S.ProfileLink>
    </S.ProfileWrapper>
  );
};

export default Profile;
