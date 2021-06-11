import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

// noinspection SpellCheckingInspection
import FuturaNormal from 'url:./fonts/TT0140M_.TTF'
// noinspection SpellCheckingInspection
import FuturaBold from 'url:./fonts/TT0144M_.TTF'


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Futura';
    src: url(${FuturaNormal}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Futura';
    src: url(${FuturaBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  ${normalize}
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  body {
    overflow-x: hidden;
    position: relative;
    color: ${props => props.theme.colors.basicTextColor};
    font-family: 'Futura', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
  }
`

export {GlobalStyles}
