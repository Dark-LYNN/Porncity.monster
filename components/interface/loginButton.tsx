import styles from '@styles/navbar.module.css'
import React, { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const LoginButton = () => {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useTranslation('common');

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement) || !event.target.closest('#user-menu')) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('click', closeDropdown as any);
    }

    return () => {
      document.removeEventListener('click', closeDropdown as any);
    };
  }, [dropdownOpen]);

  if (session && session.user) {
    return (
      <div style={{ position: 'relative' }} id="user-menu">
        <Image
          src={session.user.image ?? '/assets/images/default-avatar.png'}
          alt="User Avatar"
          style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
          height={40}
          width={40}
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div style={{ position: 'absolute', right: 0, backgroundColor: 'white', boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', zIndex: 1 }}>
            <a href="/profile" style={{ padding: '12px', display: 'block', textDecoration: 'none', color: 'black' }}>{t('Profile')}</a>
            <a href="/settings" style={{ padding: '12px', display: 'block', textDecoration: 'none', color: 'black' }}>{t('Settings')}</a>
            <button onClick={() => signOut()} style={{ padding: '12px', display: 'block', width: '100%', textAlign: 'left', border: 'none', backgroundColor: 'white' }}>{t('Sign Out')}</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <a onClick={() => signIn('discord')} className={styles.navbar__button}>Login</a>
  );
};

export default LoginButton;
