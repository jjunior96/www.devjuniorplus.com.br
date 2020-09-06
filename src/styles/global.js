/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@1,300;1,400&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  ::selection {
    background-color: #48dbfb60;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #46495A;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e1e5ee;
  }

  :root {
    /* Layout */
    --background-layout-main: #383A47;
    --background-layout-mobile: #383a47f6;

    /* Profile */
    --background-profile-primary: #46495A;
    --color-profile-primary: #e1e5ee;
    --color-profile-hover: #767b91;
    
    /* line PostItem */
    --color-line-postitem: #4E516659;

    /* Menu Links */
    --color-link-primary: #e1e5ee;
    --color-link-hover: #ff7f50;

    /* MenuBar */
    --background-menubar: #383A47;

    /* Post color */
    --post-color: #fff;
    --hightlight-quote: #ff7f50;
    --color-line-borders: #4E5166;
    --color-line-hr: #4E5166E6;

    --background-blockquote: #767b9140;

    /* Social Links BG */
    --background-social-links: #343643;

    --font-title-main: 'Permanent Marker', cursive;
    --font-title-position: 'Play', sans-serif;
    --font-mark: 'Ubuntu', sans-serif;

  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    -webkit-font-smoothing: antialiased !important;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
