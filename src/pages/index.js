/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import SEO from '../components/seo';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark {
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
  `);

  const postList = allMarkdownRemark.edges;

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
          i
        ) => (
          <PostItem
            key={i}
            slug={slug}
            background={background}
            category={category}
            date={date}
            timeToRead={toString(timeToRead)}
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

export default IndexPage;
