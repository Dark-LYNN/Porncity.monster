// @/components/interface/loginButton.tsx
import React, { useState, useEffect, useRef } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from '@styles/navbar.module.css';

const LoginButton = () => {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('common');

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('click', closeDropdown);
    } else {
      document.removeEventListener('click', closeDropdown);
    }

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [dropdownOpen]);

  if (session && session.user) {
    return (
      <div ref={dropdownRef} style={{ position: 'relative' }} id="user-menu">
        <Image
          src={session.user.image ?? '/assets/images/default-avatar.png'}
          alt="User Avatar"
          style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
          height={40}
          width={40}
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className={`${styles.language__menu}`} id="user-popup">
            <ul className={styles.languages__list}>
              <li className={styles.language}>
                <button type="button" className={styles.language__content}>
                  <span className={styles.language__content__flag}>
                    <Image draggable="false" className={styles.emoji} height={20} width={20} alt="👤" src="/assets/images/member.png" />
                  </span>
                  <span className={styles.language__content__name}>{t('Profile')}</span>
                </button>
              </li>
              <li className={styles.language}>
                <button type="button" className={styles.language__content}>
                  <span className={styles.language__content__flag}>
                    <Image draggable="false" className={styles.emoji} height={20} width={20} alt="⚙️" src="/assets/images/settings.png" />
                  </span>
                  <span className={styles.language__content__name}>{t('Settings')}</span>
                </button>
              </li>
              <li className={styles.language}>
                <button type="button" className={styles.language__content}>
                  <span className={styles.language__content__flag}>
                    <Image draggable="false" className={styles.emoji} height={20} width={20} alt="🚪" src="/assets/images/signout.png" />
                  </span>
                  <span onClick={() => signOut()} className={styles.language__content__name}>{t('Sign Out')}</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <a onClick={() => signIn('discord')} className={styles.navbar__button}>{t('Login')}</a>
  );
};

export default LoginButton;
