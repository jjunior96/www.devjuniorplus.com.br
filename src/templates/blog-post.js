/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ToUp from '../components/ToUp';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';
import Share from '../components/Share';
import SEO from '../components/seo';

import * as S from '../components/Post/styled';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  const url = data.site.siteMetadata.siteUrl;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />

      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date}</S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>

      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ToUp />
        <hr />
        <Share
          socialConfig={{
            config: {
              url: `${url}${post.fields.slug}`,
              title: post.frontmatter.title,
            },
          }}
        />
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />

      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        description
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
