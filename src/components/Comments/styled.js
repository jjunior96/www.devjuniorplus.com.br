import styled from 'styled-components';
import media from 'styled-media-query';

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;

  iframe[src*='ads-iframe'] {
    display: none;
  }

  #disqus_thread {
    a {
      color: var(--color-link-primary) !important;
    }
  }

  ${media.lessThan('large')`
    padding: 4rem 1.8rem 0;
    max-width: 100%;
  `}
`;

export const CommnentsTitle = styled.h2`
  color: var(--post-color);
  font-size: 2.4rem;
  font-weight: 700;
  padding-bottom: 0;

  ${media.lessThan('large')`
    font-size: 1.8rem;
  `}
`;
