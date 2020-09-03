import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import GlobalStyles from '../styles/global';

const Container = styled.section`
  align-items: center;
  background-image: url('https://media.giphy.com/media/l4Epf0KwYUQY5DcGc/giphy.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'San Francisco',
    'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, 'Segoe UI', Arial,
    sans-serif;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  width: 100vw;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 2rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  background: var(--background);
  color: #fff;
  font-family: Courier, monospace;
  font-size: 1.3rem;
`;

const Button = styled(Link)`
  background: var(--color-link-primary);
  border: 1px solid var(--borders);
  border-radius: 6px;
  color: var(--color-line-borders);
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 0.06em;
  line-height: 32px;
  margin-top: 1rem;
  padding: 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.5s;
  &:hover {
    color: var(--color-link-hover);
    background-color: var(--color-line-borders);
  }
`;

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <GlobalStyles />
    <Title>404</Title>
    <Text>Ué? Parece que não tem o que você procura.</Text>
    <Button to="/">De volta ao blog!</Button>
  </Container>
);

export default NotFoundPage;
