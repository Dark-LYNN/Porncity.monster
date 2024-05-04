import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import AgeVerification from '../components/interface/AgeVerification';
import Footer from '@/components/layout/footer';

import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/layout/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const isExcludedPage = Component.name === 'Custom404'; 

  return (
    <SessionProvider session={pageProps.session}>
        {!isExcludedPage && <AgeVerification />}
        <Navbar {...pageProps}  />
        <Component {...pageProps} />
        <Footer/>
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
