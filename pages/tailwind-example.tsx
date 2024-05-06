// pages/tailwind-example.tsx
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import styles from '@/styles/404.module.css'
import React from 'react';
import LocalizedLink from '@/components/interface/LocalizedLink';

const TailwindExamplePage = () => {
    const { t } = useTranslation('common');

  return (
    <>
        <div className={`${styles.transfer} relative`} >
            <div className="bg-blue-500 text-white p-4 mt-28 mb-32 w-3/4 text-center center">
                <h1 className="text-3xl font-bold">{t('Tailwind CSS Example')}</h1>
                <p className=" pb-4 text-lg">{t('This is a to see if Tailwind CSS is working')}</p>
                <LocalizedLink  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" href='/'>{t('Click Me')}</LocalizedLink>
            </div>
        </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { locale } = context;
  
    return {
      props: {
        ...(await serverSideTranslations(locale ?? 'en-US', ['common']))
      }
    };
  };
  
export default TailwindExamplePage;
