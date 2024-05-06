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

  // Toggles the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  // Closes the dropdown if clicked outside
  const closeDropdown = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setDropdownOpen(false);
    }
  };

  // Attach/detach event listeners for closing dropdown
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

  const renderDropdown = () => (
    <div className={styles.userMenuDropdown} id="user-popup">
      <ul className={styles.userMenuList}>
        <li className={styles.userMenuItem}>
          <button type="button" className={styles.userMenuButton}>
            <span className={styles.userMenuIcon}>
              <Image draggable="false" src="/assets/images/member.png" height={20} width={20} alt="Profile Icon" />
            </span>
            <span className={styles.userMenuText}>{t('Profile')}</span>
          </button>
        </li>
        <li className={styles.userMenuItem}>
          <button type="button" className={styles.userMenuButton}>
            <span className={styles.userMenuIcon}>
              <Image draggable="false" src="/assets/images/settings.png" height={20} width={20} alt="Settings Icon" />
            </span>
            <span className={styles.userMenuText}>{t('Settings')}</span>
          </button>
        </li>
        <li className={styles.userMenuItem}>
          <button type="button" className={styles.userMenuButton}>
            <span className={styles.userMenuIcon}>
              <Image draggable="false" src="/assets/images/signout.png" height={20} width={20} alt="Sign Out Icon" />
            </span>
            <span onClick={() => signOut()} className={styles.userMenuText}>{t('Sign Out')}</span>
          </button>
        </li>
      </ul>
    </div>
  );

  if (session && session.user) {
    return (
      <div ref={dropdownRef} style={{ position: 'relative' }} id="user-menu">
        <Image
          src={session.user.image ?? '/assets/images/default-avatar.png'}
          alt="User Avatar"
          style={{ cursor: 'pointer', borderRadius: '50%' }}
          height={40}
          width={40}
          onClick={toggleDropdown}
        />
        {dropdownOpen && renderDropdown()}
      </div>
    );
  }

  return (
    <a onClick={() => signIn('discord')} className={styles.navbarButton}>{t('Login')}</a>
  );
};

export default LoginButton;
