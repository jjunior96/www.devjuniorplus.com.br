import styled from 'styled-components';

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--background-layout-main);
`;

export const LayoutMain = styled.main`
  /* Menos o altura do Profile */
  min-height: calc(100vh - 6.8rem);
  max-width: 1200px;
  font-size: 1.6rem;
  margin: 0 auto;
`;
