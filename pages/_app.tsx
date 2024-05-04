import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';

import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/layout/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
        <Navbar {...pageProps}  />
        <Component {...pageProps} />
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
