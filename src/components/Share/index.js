// import React from 'react';

// import * as S from './styled';

// const Share = () => (
//   <S.ShareWrapper>
//     <S.ShareList>
//       <S.ShareItem>
//         <S.ShareLink>
//           <S.IconWrapper>.</S.IconWrapper>
//         </S.ShareLink>
//       </S.ShareItem>
//     </S.ShareList>
//   </S.ShareWrapper>
// );

// export default Share;

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
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <WhatsappShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag=""
      >
        <WhatsappIcon size={40} round />
      </WhatsappShareButton>

      <LinkedinShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag=""
      >
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>

      <TwitterShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag=""
      >
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <TelegramShareButton
        url={socialConfig.config.url}
        quote={socialConfig.config.title}
        hashtag=""
      >
        <TelegramIcon size={40} round />
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
