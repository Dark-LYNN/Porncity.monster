import React from 'react';
import LoginButton from '@/components/interface/loginButton';
import styles from '@styles/navbar.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    return (
    <>
        <nav className={styles.navbar}>
            <div className={styles.navbar__side}>
                <a href="/" aria-current="page" className={`${styles.navbar__icon} ${styles.nuxt_link_exact_active} ${styles.nuxt_link_active}`}>
                    <img src="/assets/images/PornCity%20Logo.png" alt="Discord Bots logo" width="48"/>
                </a>
                <ul className={styles.navbar__links}>
                    <li className={`${styles.needs_exact} ${styles.navbar__link} ${styles.nuxt_link_active} ${styles.nuxt_link_exact_active}`}>
                        <a href="/" rel="nofollow" className={styles.navbar__link__activator}>Home</a>
                    </li>
                    <li>
                        <Link locale="en-US" href={`https://discord.gg/${process.env.DISCORD_INVITE}`} rel="nofollow" className={`${styles.navbar__link} ${styles.navbar__link__activator}`}>Server</Link>
                    </li>
                    <li className={styles.navbar__link}>
                        <a href="/about" rel="nofollow" className={styles.navbar__link__activator}>About</a>
                    </li>
                </ul>
            </div>
            <div className={`${styles.navbar__side} ${styles.navbar__user}`}>
                <span aria-label="Language" data-text="Language" className={`${styles.tooltip} ${styles.is_bottom}`}>
                    <button type="button" className={`${styles.navbar__button} ${styles.is_circle} ${styles.has_regular_icon}`}>
                        <span role="img" aria-label="Translate icon" className={`${styles.mdi} ${styles.mdi_translate}`}>
                            <svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"></path>
                            </svg>
                        </span>
                    </button>
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
            <span aria-label="Language" data-text="Language" className={`${styles.tooltip} ${styles.navbar__language__mobile} ${styles.is_left}`}>
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
/*        <nav className={styles.navbar}>
            <h1 className={styles.navTitle}>My App</h1>
            <div className={styles.loginSection}>
                <LoginButton />
            </div>
        </nav>*/
    );
};

export default Navbar;

/*



*/