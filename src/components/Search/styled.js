import styled from 'styled-components';
import media from 'styled-media-query';

export const SearchWrapper = styled.section`
  margin-top: 2rem;
  background: var(--background-layout-main);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox,
  .ais-Stats {
    padding: 1rem 3rem;
    ${media.lessThan('large')`
      padding: 1rem 1rem;
    `}
  }

  .ais-SearchBox {
    padding-top: 6rem;
    ${media.lessThan('large')`
      padding-top: 1rem;
    `}
  }

  .ais-Stats {
    color: var(--color-link-primary);
    ${media.lessThan('large')`
      padding: 0 1.6rem 0.6rem;
    `}
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--color-line-postitem);
    color: var(--color-link-primary);
    display: flex;
    font-size: 2.4rem;
    padding: 0.5rem;
    width: 100%;

    &:focus {
      outline: none !important;
      border: 1px solid var(--color-link-hover);
    }

    &::placeholder {
      color: var(--color-link-primary);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`;
