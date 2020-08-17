/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';

import * as S from './styled';

const RecommendedPosts = ({ next, previous }) => (
  <S.RecommnendedWrapper>
    {previous && (
      <S.RecommnendedLink to={previous.fields.slug} className="previous">
        {previous.frontmatter.title}
      </S.RecommnendedLink>
    )}

    {next && (
      <S.RecommnendedLink to={next.fields.slug} className="next">
        {next.frontmatter.title}
      </S.RecommnendedLink>
    )}
  </S.RecommnendedWrapper>
);

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),

    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),

  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),

    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};

export default RecommendedPosts;
