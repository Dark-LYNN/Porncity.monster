import React, { useEffect } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from '@/styles/404.module.css'
import LocalizedLink from '@/components/interface/LocalizedLink';
import { useTranslation } from 'next-i18next';

import '../public/assets/css/style.css';

const Verified = () => {
    const { t } = useTranslation('common');
    return (
        <>
            <div className={`${styles.transfer} relative`} >
                <div className="bg-blue-500 text-white p-4 mt-28 mb-32 w-3/4 text-center center">
                    <h1 className="text-3xl font-bold">{t('Verification Successful')}</h1>
                    <p className=" pb-4 text-lg">{t('You have been successfully verified!')}</p>
                    <LocalizedLink  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" href='/'>{t('Welcome to our community!')}</LocalizedLink>
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
  


export default Verified;
