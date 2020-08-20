/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import * as S from './styled';

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  return (
    <S.PaginationWrapper>
      {/* Primeira pagina */}
      {!isFirst && (
        <AniLink
          to={prevPage}
          cover
          direction="left"
          bg="#383A47"
          duration={0.7}
        >
          {' '}
          ← Página anterior
        </AniLink>
      )}

      <p>
        {currentPage} de {numPages}
      </p>

      {/* Ultima pagina */}
      {!isLast && (
        <AniLink
          to={nextPage}
          cover
          direction="right"
          bg="#383A47"
          duration={0.7}
        >
          Próxima página →
        </AniLink>
      )}
    </S.PaginationWrapper>
  );
};

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
};

export default Pagination;
