// @/pages/_app.tsx
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';
import AgeVerification from '../components/interface/AgeVerification';
import Footer from '@/components/layout/footer';

import Head from 'next/head';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/layout/navbar';

import '../public/assets/css/style.css';

function MyApp({ Component, pageProps }: AppProps) {
  const isExcludedPage = Component.name === 'Custom404';

  const page = pageProps.__NEXT_DATA__?.page || '/';
  const pathname = typeof page === 'string' ? page : '/';
  const pageTitle = pathname.charAt(1).toUpperCase() + pathname.slice(2) || 'Home';
  const title = `PornDB | ${pageTitle}`;
  const is404Page = pathname === '/404';
  const isHomePage = pathname === '/';
  const canonical = `https://porncity.monster${pathname}`;

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Dev Credit */}
        <meta name="author" content="PornDB" />

        {/* Browser walking */}
        <meta
          name="description"
          content="PornCity is an adult-only Discord community that operates as a unique and comprehensive adult content distribution network within the Discord platform. The network comprises multiple interconnected servers, each tailored to various interests and genres, fostering an inclusive environment for adult content enthusiasts."
        />
        <meta name="language" content="en" />
        <link rel="canonical" href={canonical} />
        <title>{title}</title>
        {/* Embedding */}
        <meta name="theme-color" content="#ff47ff" />
        <meta property="og:site_name" content="https://porncity.monster/" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./assets/images/favicon.png" />
        <meta property="og:image:secure_url" content="/assets/images/favicon.png" />
        <meta
          property="og:description"
          content="PornCity is an adult-only Discord community that operates as a unique and comprehensive adult content distribution network within the Discord platform. The network comprises multiple interconnected servers, each tailored to various interests and genres, fostering an inclusive environment for adult content enthusiasts."
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/images/android-chrome-512x512.png" />

        {/* 404.tsx Only */}
        {is404Page && <meta name="robots" content="noindex" />}
        {isHomePage && <meta name="robots" content="index, follow" />}
      </Head>
      <SessionProvider session={pageProps.session}>
        {!isExcludedPage && <AgeVerification />}
        <Navbar {...pageProps} />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
