import styles from '@styles/navbar.module.css'
import React, { useState, useEffect, useRef } from 'react';
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
      //console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);

    }

    return () => {
      document.removeEventListener('click', closeDropdown as any);
    };
  }, [dropdownOpen]);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenuVisibility = () => {
      setIsMenuVisible(!isMenuVisible);
  };
  
  useEffect(() => {
      const handleDocumentClick = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
  
          // Check if the clicked area is not the menu or the toggle button
          if (target && !target.closest(`.${styles.language__menu}`) && toggleButtonRef.current && !toggleButtonRef.current.contains(target)) {
              setIsMenuVisible(false);
          }
      };
  
      document.addEventListener('click', handleDocumentClick);
  
      return () => {
          document.removeEventListener('click', handleDocumentClick);
      };
  }, [isMenuVisible]);
  if (session && session.user) {
    return (
      <div style={{ position: 'relative' }} id="user-menu" onClick={toggleMenuVisibility}>
        <Image
          src={session.user.image ?? '/assets/images/default-avatar.png'}
          alt="User Avatar"
          style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
          height={40}
          width={40}
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className={`${styles.language__menu} ${isMenuVisible ? styles.visible : styles.hidden}`}>
            <ul className={styles.languages__list}>
              <li className={styles.language}>
                <button type="button" className={styles.language__content}>
                  <span className={styles.language__content__flag}>
                    <Image draggable="false" className={styles.emoji} height={1.25} width={1.25} alt="👤" src="/assets/images/member.png"/>
                  </span>
                  <span className={styles.language__content__name}>{t('Profile')}</span>
                </button>
              </li>
              <li className={styles.language}>
                <button type="button" className={styles.language__content}>
                  <span className={styles.language__content__flag}>
                    <Image draggable="false" className={styles.emoji} height={1.25} width={1.25} alt="⚙️" src="/assets/images/settings.png"/>
                  </span>
                  <span className={styles.language__content__name}>{t('Settings')}</span>
                </button>
              </li>
              <li className={styles.language}>
                <button type="button" className={styles.language__content}>
                  <span className={styles.language__content__flag}>
                    <Image draggable="false" className={styles.emoji} height={1.25} width={1.25} alt="🇹🇷" src="/assets/images/signout.png"/>
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