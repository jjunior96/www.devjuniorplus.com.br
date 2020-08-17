/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import SEO from '../components/seo';

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        (
          {
            node: {
              frontmatter: { background, category, date, description, title },
              timeToRead,
              fields: { slug },
            },
          },
          index
        ) => (
          <PostItem
            key={index}
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}
      <Helmet>
        <title>Home</title>
      </Helmet>
    </Layout>
  );
};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            description
            title
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
