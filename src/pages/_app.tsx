import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import OperationContextProvider from '../hooks/useOperation';
import ThemeContextProvider from '../hooks/useTheme';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <OperationContextProvider>
        <Component {...pageProps} />
      </OperationContextProvider>
    </ThemeContextProvider>
  );
};


export default MyApp
