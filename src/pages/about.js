import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Helmet>
      <title>About</title>
    </Helmet>
  </Layout>
);

export default AboutPage;
