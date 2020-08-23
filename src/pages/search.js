import React from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';
import SEO from '../components/seo';

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Search" description="Pesquise por algum post " />
      <Search />
    </Layout>
  );
};

export default SearchPage;
