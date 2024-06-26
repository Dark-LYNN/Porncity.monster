// @/pages/index.tsx
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import '../public/assets/css/style.css';
import RecentUploads from '@/components/layout/recentUploads';

const Home = () => {
  return (
    <>
      <RecentUploads />
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

export default Home;
