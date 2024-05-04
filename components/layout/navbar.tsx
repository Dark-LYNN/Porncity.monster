import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import LoginButton from '@/components/interface/loginButton';
import styles from '@styles/navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
    const router = useRouter();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);

    const toggleMenuVisibility = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const changeLanguage = (locale: 'en-US' | 'de-DE' | 'ar-SA' | 'nl-NL' | 'it-IT' | 'pl-PL' | 'ru-RU' | 'tr-TR' | 'pirate') => {
        const pathname = router.pathname;
        router.push(pathname, pathname, { locale });
        setIsMenuVisible(false);
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




    return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.navbar__side}>
                <Link href="/" aria-current="page" className={`${styles.navbar__icon} ${styles.nuxt_link_exact_active} ${styles.nuxt_link_active}`}>
                    <Image src="/assets/images/PornCity%20Logo.png" alt="Discord Bots logo" height={48} width={48}/>
                </Link>
                <ul className={styles.navbar__links}>
                    <li className={`${styles.needs_exact} ${styles.navbar__link} ${styles.nuxt_link_active} ${styles.nuxt_link_exact_active}`}>
                        <Link href="/" rel="nofollow" className={styles.navbar__link__activator}>Home</Link>
                    </li>
                    <li>
                        <Link locale="en-US" href={`https://discord.gg/${process.env.DISCORD_INVITE}`} rel="nofollow" className={`${styles.navbar__link} ${styles.navbar__link__activator}`}>Server</Link>
                    </li>
                    <li className={styles.navbar__link}>
                        <Link href="/about" rel="nofollow" className={styles.navbar__link__activator}>About</Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles.navbar__side} ${styles.navbar__user}`}>
                <span aria-label={styles.language} data-text={styles.language} className={`${styles.tooltip} ${styles.is_bottom}`}>
                    <button ref={toggleButtonRef} type="button" className={`${styles.navbar__button} ${styles.is_circle} ${styles.has_regular_icon}`} onClick={toggleMenuVisibility}>
                        <span role="img" aria-label="Translate icon" className={`${styles.mdi} ${styles.mdi_translate}`}>
                            <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"></path>
                            </svg>
                        </span>
                    </button>
                    {isMenuVisible && (
                        <div className={`${styles.language__menu} ${isMenuVisible ? styles.visible : styles.hidden}`}>
                            <ul className={styles.languages__list}>
                            {/*     <li className={styles.language}>
                                    <button type="button" className={styles.language__content} onClick={() => changeLanguage('ar-SA')}>
                                        <span className={styles.language__content__flag}>
                                            <img draggable="false" className={styles.emoji} alt="🇸🇦" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f8-1f1e6.svg"/>
                                        </span>
                                        <span className={styles.language__content__name}>العربية</span>
                                    </button>
                                </li>
                                <li className={styles.language}>
                                    <button type="button" className={styles.language__content} onClick={() => changeLanguage('de-DE')}>
                                        <span className={styles.language__content__flag}>
                                            <img draggable="false" className={styles.emoji} alt="🇩🇪" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1e9-1f1ea.svg"/>
                                        </span>
                                        <span className={styles.language__content__name}>Deutsch</span>
                                    </button>
                                </li>*/}
                                <li className={styles.language}>
                                    <button type="button" className={styles.language__content} onClick={() => changeLanguage('en-US')}>
                                        <span className={styles.language__content__flag}>
                                            <Image draggable="false" className={styles.emoji} height={1.25} width={1.25} alt="🇺🇸" src="https://cdn.lynnux.xyz/lynnux/Flags/Icon-Flag-US.png"/>
                                        </span>
                                        <span className={styles.language__content__name}>English</span>
                                    </button>
                                </li>
                            {/* <li className={styles.language}>
                                    <button type="button" className={styles.language__content} onClick={() => changeLanguage('it-IT')}>
                                        <span className={styles.language__content__flag}>
                                            <img draggable="false" className={styles.emoji} alt="🇮🇹" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ee-1f1f9.svg"/>
                                        </span>
                                        <span className={styles.language__content__name}>Italiano</span>
                                    </button>
                                </li>*/}
                                <li className={styles.language}>
                                    <button type="button" className={styles.language__content} onClick={() => changeLanguage('tr-TR')}>
                                        <span className={styles.language__content__flag}>
                                            <Image draggable="false" className={styles.emoji} height={1.25} width={1.25} alt="🇹🇷" src="https://cdn.lynnux.xyz/lynnux/Flags/Icon-Flag-Turkey.png"/>
                                        </span>
                                        <span className={styles.language__content__name}>Türkçe</span>
                                    </button>
                                </li>
                                <li className={styles.language}>
                                    <button type="button" className={styles.language__content} onClick={() => changeLanguage('nl-NL')}>
                                        <span className={styles.language__content__flag}>
                                            <Image draggable="false" className={styles.emoji} height={1.25} width={1.25} alt="🇳🇱" src="https://cdn.lynnux.xyz/lynnux/Flags/Icon-Flag-Netherlands.png"/>
                                        </span>
                                        <span className={styles.language__content__name}>Nederlands</span>
                                    </button>
                                </li>
                            {/* <li className={styles.language}>
                                    <button type="button" className={styles.language__content}>
                                        <span className={styles.language__content__flag} onClick={() => changeLanguage('pl-PL')}>
                                            <img draggable="false" className={styles.emoji} alt="🇵🇱" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f5-1f1f1.svg"/>
                                        </span>
                                        <span className={styles.language__content__name}>Polski</span>
                                    </button>
                                </li>
                                <li className={styles.language}>
                                    <button type="button" className={styles.language__content} onClick={() => changeLanguage('pirate')}>
                                        <span className={styles.language__content__flag}>
                                            <img draggable="false" className={styles.emoji} alt="🏴&zwj;☠️" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f3f4-200d-2620-fe0f.svg"/>
                                        </span>
                                        <span className={styles.language__content__name}>Pirate</span>
                                    </button>
                                </li>
                                <li className={styles.language}>
                                    <button type="button" className={styles.language__content} onClick={() => changeLanguage('ru-RU')}>
                                        <span className={styles.language__content__flag}>
                                            <img draggable="false" className={styles.emoji} alt="🇷🇺" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f7-1f1fa.svg"/>
                                        </span>
                                        <span className={styles.language__content__name}>Русский</span>
                                    </button>
                                </li>*/}
                                <li className={styles.language}>
                                    <a href="https://translate.lynnux.xyz" className={styles.language__content}>
                                        <span className={styles.language__content__flag}>
                                            <span role="img" aria-label="Plus icon" className="mdi mdi-plus">
                                                <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span className={styles.language__content__name}>Contributeㅤ</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </span>
                <LoginButton />
            </div>
        </nav>
        <nav className={`${styles.navbar} ${styles.is_mobile}`}>
            <div className={styles.navbar__menu}>
                <button type="button" className={styles.navbar__menu__button}>
                    <span role="img" aria-label="Menu icon" className={`${styles.mdi} ${styles.mdi_menu}`}>
                        <svg fill="currentColor" width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
                        </svg>
                    </span>
                </button>
            </div>
            <span aria-label={styles.language} data-text={styles.language} className={`${styles.tooltip} ${styles.navbar__language__mobile} ${styles.is_left}`}>
                <button type="button" className={`${styles.navbar__button} ${styles.is_circle} ${styles.has_regular_icon}`}>
                    <span role="img" aria-label="Translate icon" className={`${styles.mdi} ${styles.mdi_translate}`}>
                        <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"></path>
                        </svg>
                    </span>
                </button>
            </span>
        </nav>
    </>
    );
};

export default Navbar;

/*



*/