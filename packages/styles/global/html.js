import { css } from "@emotion/react";

const html = (theme) => css`
  html {
    font-size: 20px;
    @media (max-width: 2000px) {
      font-size: 18px;
    }
    @media (max-width: 1200px) {
      font-size: 16px;
    }
    @media (max-width: 800px) {
      font-size: 14px;
    }
    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  body {
    padding: 0;
    margin: 0;
    color: #000;
    font-size: 18px;
    line-height: 1.33;
    min-width: 375px;
    min-height: 100vh;
    font-weight: 400;

    ${theme.breakpoints.xsmall.max} {
      font-size: 16px;
    }

    > div:first-of-type > div:first-of-type {
      overflow: hidden;
    }
  }

  * {
    box-sizing: border-box;
  }

  button {
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote {
    margin: 1.125em 0 0.675em 0;
    line-height: 1.33;
    padding: 0;

    &,
    a {
      color: #333;
    }
  }

  b,
  strong {
    font-weight: 500;
  }

  h1,
  h2 {
    font-size: 44px;
    font-weight: 300;

    ${theme.breakpoints.xsmall.max} {
      font-size: 30px;
    }
  }

  h3,
  h4 {
    font-size: 24px;
    font-weight: 300;

    ${theme.breakpoints.xsmall.max} {
    }
  }

  h5,
  h6 {
    font-size: inherit;
    font-weight: 300;
  }

  blockquote {
    border-left: solid 4px #ccc;
    padding: 8px 0 8px 16px;
    font-size: 22px;

    ${theme.breakpoints.xsmall.max} {
      font-size: 18px;
    }
  }

  figure {
    margin: 0;
  }

  p {
    font-weight: 400;
  }

  a {
    color: ${theme.colors.link};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.linkDark};
      text-decoration: underline;
    }
  }

  article {
    a {
      text-decoration: underline;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  sup {
    font-size: 50%;
    padding: 0 0 0 4px;
  }
`;
export default html;
