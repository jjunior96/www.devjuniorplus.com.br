/* eslint-disable no-undef */
import styled from 'styled-components';
import media from 'styled-media-query';

export const PostHeader = styled.header`
  color: var(--post-color);
  margin: auto;
  max-width: 88rem;
  padding: 5rem 5rem 0;

  ${media.lessThan('large')`
    padding: 4rem 1.6rem 0;
    max-width: 100%;
  `}
`;

export const PostTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1.6rem auto;

  ${media.lessThan('large')`
    font-size: 3.2rem;
    line-height: 4rem;
    padding: 0 1.6rem;
  `}
`;

export const PostDescription = styled.h2`
  font-size: 2.4rem;
  font-weight: 200;
  padding: 0 1.4rem;

  ${media.lessThan('large')`
    font-size: 2rem;
    line-height: 2.4rem;
    padding: 0 1.6rem;
  `}
`;

export const PostDate = styled.p`
  font-size: 1.6rem;
  font-weight: 100;
  padding: 0 1.6rem;

  ${media.lessThan('large')`
    padding: 0 1.6rem;
  `}
`;

export const MainContent = styled.section`
  margin: auto;
  max-width: 88rem;
  padding: 2rem 5rem;
  
  ${media.lessThan('large')`
    padding: 2.4rem 1.6rem;
    max-width: 100%;
  `}
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--post-color);
    font-size: 2rem;
    font-weight: 300;
    line-height: 3rem;
    letter-spacing: 0.1rem;
    padding: 0 1.4rem;
    
    ${media.lessThan('large')`
      padding: 0 1.6rem;
      word-break: break-word;
      margin-top: 0.8rem;
    `}
  }
  p {
    margin: 0 auto 2rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1.6rem;
  }
  ul{
    list-style: disc;
  }

  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.8rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
    
    ${media.lessThan('large')`
      padding: 0 1.6rem;
  `}
  }
  blockquote {
    color: var(--postColor);
    border-left: 0.5rem solid var(--hightlight-quote);
    padding: 0 2.4rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--color-line-borders);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.1rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 3.2rem;
    
    ${media.lessThan('large')`
      font-size: 2.4rem;
  `}
  }
  h2 {
    font-size: 2.4rem;
    
    ${media.lessThan('large')`
      font-size: 2rem;
  `}
  }
  h3 {
    font-size: 2rem;
    
    ${media.lessThan('large')`
      font-size: 1.8rem;
  `}
  }
  h4 {
    font-size: 1.6rem;
    /* ${media.lessThan('large')`
      padding: 0;
  `} */
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }

  mark{
    background-color: #767b91;
    padding: 0.3rem;
    border-radius: 4px;
    color: #fff;
    font-family: var(--font-mark);
    font-weight: 400;
    font-style: italic;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    width: 100%;
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  /* Código */
  .gatsby-highlight {
    padding: 0 1.3rem 2rem;

    ${media.lessThan('large')`
      padding: 1rem 1.6rem;
      max-width: 100%;
    `}
  }

  .instagram-media {
    margin: 2rem auto !important;
  }

  a {
    border-bottom: 1px dashed var(--hightlight-quote);
    color: var(--hightlight-quote);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--post-color);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
