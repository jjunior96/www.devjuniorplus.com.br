import React from 'react';

import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLinks';
import SEO from '../components/seo';

import Image from '../images/darth-vader.jpg';
import Image1 from '../images/kratos.jpg';

import { MainContent } from '../components/Post/styled';

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <img src={Image} alt="Darth Vader" />

      <h1>Sobre mim</h1>

      <p>
        <strong>Primeiramente, agradeço por estar aqui.</strong>
      </p>

      <p>
        Sou apaixonado por Frontend, toda a parte gráfica da aplicação,
        trabalhar com fontes, cores, interatividade... Passo horas trabalhando
        com tudo isso sem ver o tempo passar.
      </p>

      <p>
        Conheci programação aos 15 anos, no curso técnico que era integrado ao
        Ensino Médio, onde tive o contato com HTML, CSS e Javascript.
      </p>

      <p>
        Fiz alguns cursos específicos sobre Gatsby, Javascript ES6+, GraphQL,
        mas na maior parte do tempo, estou lendo documentações e tentando
        aprender algo novo. Atualmente estou focado em dominar o React.
      </p>

      <p>
        Gosto de trabalhar com outras pessoas, aprender coisas novas, ensinar
        coisas novas (minha forma preferida de aprender, por isso decidir criar
        um blog, para compartilhar o que estou estudando). Gosto de ler no
        Kindle. Sempre que não estou codando, estou lendo algo relacionado a
        desenvolvimento, aprendendo novos conceitos.
      </p>

      <p>
        Nas horas vagas, além de ler, gosto de desenhar. Desenho desde criança,
        dediquei muitas horas de minha vida aprendendo desenho. Em 2015 adquiri
        um mesa digitalizadora (era meu sonho) e comecei a estudar pintura
        digital.
      </p>

      <p>
        Tenho alguns desenhos no{' '}
        <a
          href="https://www.artstation.com/jjunior_art"
          target="_blank"
          rel="noopener noreferrer"
        >
          Artstation
        </a>
        , e no{' '}
        <a
          href="https://www.deviantart.com/jjunior96"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deviantart
        </a>
        .
      </p>
      <img src={Image1} alt="Kratos" />

      <h2>Contato</h2>
      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais:
      </p>
    </MainContent>
    <SocialLinks />
  </Layout>
);

export default AboutPage;
