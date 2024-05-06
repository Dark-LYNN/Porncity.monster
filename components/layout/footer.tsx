// @/components/layour/footer.tsx
import { useTranslation } from 'next-i18next';
import LocalizedLink from '@/components/interface/LocalizedLink';
import styles from '@styles/footer.module.css'
import Link from 'next/link'; 
import Image from 'next/image';

const Footer = () => {
    const { t } = useTranslation('common');

    return (
        <>
            <footer className={styles.footer}>
                <section className={styles.footer_inner} role="complementary">
                    <article className={styles.footer_widget}>
                        <div className={styles.execphpwidget}>
                            <div className={styles.footerlogo}>
                                <h3>PornCity</h3>
                            </div>
                            <p className={styles.footerleftblock}>{t('Description')}</p>
                            <div className={styles.socials}>
                                <Link href="https://twitter.com/CornDb" rel="nofollow">
                                    <Image width="32" height="32" loading="lazy" src="/assets/images/X_Porncity.svg" alt="Twitter"/>
                                </Link>
                                <a target="_blank" href="https://onlyfans.com/corndb" rel="nofollow">
                                    <Image width="32" height="32" src="/assets/images/Onlyfans_Porncity.svg" loading="lazy" alt="Onlyfans"/>
                                </a>
                                <a target="_blank" href="https://discord.gg/porndb" rel="nofollow">
                                    <Image loading="lazy" width="32" height="32" src="/assets/images/Discord_Porncity.svg" alt="Discord"/>
                                </a>
                                <a href="https://www.instagram.com/corndb/" rel="nofollow">
                                    <Image width="32" height="32" src="/assets/images/IG_Porncity.svg" loading="lazy" alt="instagram"/>
                                </a>
                                <a href="mailto:contact.lynnux@gmail.com">
                                    <Image width="32" height="32" src="/assets/images/Email_Porncity.svg" loading="lazy" alt="Contact"/>
                                </a>
                            {/* <a target="_blank" href="https://bit.ly/41jLre">
                                    <Image loading="lazy" width="32" height="32" src="/assets/images/YT_Porncity.svg" alt="YouTube"/>
                                </a>
                                 <a href="https://www.tiktok.com/@hentaied1">
                                    <Image width="32" height="32" src="/assets/images/Tiktok_Porncity.svg" loading="lazy" alt="Tiktok"/>
                                </a>*/}
                            </div>
                        {/* <Image style={{marginTop:24}} className={styles.footer_img} width="500" height="76" src="/assets/images/Company-info.png" loading="lazy" alt="company details"/>*/}
                        </div>
                    </article>
                    <article className={styles.footer_widget}>
                        <h3>Top Categories</h3>
                            <ul id={styles.menu_footer_menu} className={styles.menu}>
                                <li>
                                    <LocalizedLink className={styles.link_a} href="/category/Hentai/">Hentai</LocalizedLink>
                                </li>
                                <li>
                                    <LocalizedLink className={styles.link_a} href="/category/Milf/">Milf</LocalizedLink>
                                </li>
                                <li>
                                    <LocalizedLink className={styles.link_a} href="/category/amateur/">Amateur</LocalizedLink>
                                </li>
                                <li>
                                    <LocalizedLink className={styles.link_a} href="/category/creampie/">Creampie</LocalizedLink>
                                </li>
                                <li>
                                    <LocalizedLink className={styles.link_a} href="/category/Rule34/">Rule 34</LocalizedLink>
                                </li>
                                <li>
                                    <LocalizedLink className={styles.link_a} href="/category/Lesbian/">Lesbian</LocalizedLink>
                                </li>
                            </ul>
                        </article>
                        <article className={styles.footer_widget}>
                            <h3>Contact Us</h3>
                            <ul id={styles.menu_footer_menu} className={styles.menu}>
                                <li>
                                    <LocalizedLink className={styles.link_a} href="./contact/">Drop us a message</LocalizedLink>
                                </li>
                            </ul>
                        </article>
                        <article className={styles.footer_widget}>
                        <h3>Links</h3>
                        <div className={styles.menu_footer_menu_container}>
                            <ul id={styles.menu_footer_menu} className={styles.menu}>
                                <li id={styles.menu_item_370} className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page} ${styles.menu_item_363}`}>
                                    <LocalizedLink className={styles.link_a} href="/">Homepage</LocalizedLink>
                                </li>
                                <li id={styles.menu_item_362} className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page} ${styles.menu_item_363}`}>
                                    <LocalizedLink className={styles.link_a} href="/blogs/">BLOG</LocalizedLink>
                                </li>
                                <li id={styles.menu_item_361} className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page} ${styles.menu_item_363}`}>
                                    <LocalizedLink className={styles.link_a} href="/faq/">FAQ</LocalizedLink>
                                </li>
                                <li id={styles.menu_item_369} className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page} ${styles.menu_item_363}`}>
                                    <LocalizedLink className={styles.link_a} href="/aff/signup">Join as affiliate</LocalizedLink>
                                </li>
                                <li id={styles.menu_item_1964} className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page} ${styles.menu_item_1964}`}>
                                    <LocalizedLink className={styles.link_a} href="/privacy-policy/">Privacy Policy</LocalizedLink>
                                </li>
                                <li id={styles.menu_item_1966} className={`${styles.menu_item} ${styles.menu_item_type_post_type} ${styles.menu_item_object_page} ${styles.menu_item_1966}`}>
                                    <LocalizedLink className={styles.link_a} href="/terms-and-conditions/">Terms and Conditions</LocalizedLink>
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>
                <br/>
            <div className={`${styles.copyright} color-white text-center`}>© 2023 <span className={styles.pinkie}>Porncity</span>. All rights reserved. {/*<span><img width="60" height="20" className="creditcardlogos" src="https://hentaied.com/wp-content/uploads/2022/07/creditcards.jpg" loading="lazy" alt="credit card logos"/></span>*/}</div> 
            <br/>
            </footer>
        </>
    );
};
export default Footer;
