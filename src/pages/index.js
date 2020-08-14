import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <title>Home</title>
    </Helmet>
    <PostItem
      slug="/about/"
      background="red"
      category="Misc"
      date="14 de Agosto"
      timeToRead="3"
      title="Title"
      description="Description"
    />
  </Layout>
);

export default IndexPage;
