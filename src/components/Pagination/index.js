/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'gatsby';

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
      {!isFirst && <Link to={prevPage}> ← Página anterior</Link>}

      <p>
        {currentPage} de {numPages}
      </p>

      {/* Ultima pagina */}
      {!isLast && <Link to={nextPage}>Próxima página →</Link>}
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
