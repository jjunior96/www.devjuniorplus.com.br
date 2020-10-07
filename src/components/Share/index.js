import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';

import * as S from './styled';

const Share = ({ socialConfig }) => (
  <>
    <S.ShareTitle>Compartilhe nas redes sociais</S.ShareTitle>
    <S.ShareWrapper>
      <FacebookShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag=""
      >
        <S.IconWrapper>
          <FacebookIcon size={40} round />
        </S.IconWrapper>
      </FacebookShareButton>

      <WhatsappShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag=""
      >
        <S.IconWrapper>
          <WhatsappIcon size={40} round />
        </S.IconWrapper>
      </WhatsappShareButton>

      <LinkedinShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag=""
      >
        <S.IconWrapper>
          <LinkedinIcon size={40} round />
        </S.IconWrapper>
      </LinkedinShareButton>

      <TwitterShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag=""
      >
        <S.IconWrapper>
          <TwitterIcon size={40} round />
        </S.IconWrapper>
      </TwitterShareButton>

      <TelegramShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag=""
      >
        <S.IconWrapper>
          <TelegramIcon size={40} round />
        </S.IconWrapper>
      </TelegramShareButton>
    </S.ShareWrapper>
  </>
);

Share.propTypes = {
  socialConfig: PropTypes.shape({
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Share;
