import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
    <div className="Profile-wrapper">
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
