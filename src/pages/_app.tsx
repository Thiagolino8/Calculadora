import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import OperationContextProvider from '../hooks/useOperation';
import ThemeContextProvider from '../hooks/useTheme';
import Head from 'next/head';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <OperationContextProvider>
        <Head>
          <title>Calculadora</title>
          <meta charSet="utf-8" />
        </Head>
        <Component {...pageProps} />
      </OperationContextProvider>
    </ThemeContextProvider>
  );
};


export default MyApp
