import { useRouter } from 'next/router';

export const useLocalizedLink = () => {
  const { locale, defaultLocale } = useRouter();

  return (path: string) => {
    return locale === defaultLocale ? path : `/${locale}${path}`;
  };
};
