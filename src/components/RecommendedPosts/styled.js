import styled from 'styled-components';
import { Link } from 'gatsby';

export const RecommnendedWrapper = styled.section`
  border-bottom: 1px solid var(--color-line-borders);
  border-top: 1px solid var(--color-line-borders);
  background: var(--background-layout-main);
  display: flex;
`;

export const RecommnendedLink = styled(Link)`
  display: flex;
  align-items: center;
  background: var(--background-layout-main);
  color: var(--color-link-primary);
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  &:hover {
    background: var(--color-line-borders);
    color: var(--color-link-hover);
  }

  &.previous {
    border-right: 1px solid var(--color-line-borders);
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }

  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;
