import React, { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import theme from 'styles/theme';
import GlobalStyle from 'styles/global';

let currentUrl = '';
function MyApp({ Component, pageProps }) {
  /*
   * on route change
   */
  const handleRouteChange = (newUrl) => {
    if (newUrl === currentUrl) {
      return;
    }
    currentUrl = newUrl;
  };
  const router = useRouter();
  useEffect(() => {
    // initial page load
    handleRouteChange(router.pathname);
    // subsequent pages
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  /*
   * on window ready (client-side only)
   */
  useEffect(() => {
    // // fix mobile safari scrolling
    // window.document.body.addEventListener('wheel', function (e) {
    //   e.preventDefault();
    // });
    // window.document.body.addEventListener('touchmove', function (e) {
    //   e.preventDefault();
    // });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Head />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
