import Link from 'next/link';
import { useLocalizedLink } from '@/utils/getLocalizedLink';
import styles from './YourComponent.module.css';

interface LocalizedLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string; // Make className optional
  }

  const LocalizedLink: React.FC<LocalizedLinkProps> = ({ href, children, className }) => {
    const getLocalizedLink = useLocalizedLink();

  return (
    <Link href={getLocalizedLink(href)} className={className}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
