// @/pages/404.tsx
import React from 'react';
import { GetStaticProps } from 'next';
import Img from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LocalizedLink from '@/components/interface/LocalizedLink';
import styles from '@styles/404.module.css'

const Custom404 = () => {
    const { t } = useTranslation('common');
    const PaddingBottom: React.CSSProperties = { paddingBottom: "1rem" };
  
    return (
        < >
            <div className={styles.body}>
                <div className={styles.container}>
                    <Img style={PaddingBottom} width="500" height="500" src="/assets/images/svg/NotFound.svg" alt="not-found" className={styles.img} />

                    <h4 className={styles.h1} style={{ backgroundColor: 'transparent', paddingBottom: '1rem' }}>
                        {t("The page you're looking for can't be found.")}
                    </h4>
                    <LocalizedLink className={styles.button} href="/">{t('Home')}</LocalizedLink>
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
    },
  });
  
  export default Custom404;