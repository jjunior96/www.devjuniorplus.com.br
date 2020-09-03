import React from 'react';

import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const TitleWrapper = styled.section`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 2.4rem auto;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
`;

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Series" description="Series sobre conteúdos" />
      <TitleWrapper>
        <Title>Disponível em breve! Aguarde...</Title>
      </TitleWrapper>
    </Layout>
  );
};

export default SearchPage;
