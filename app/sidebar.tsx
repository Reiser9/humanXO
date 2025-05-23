'use client'

import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css';

import { Cross, Moon, Stats, Sun, Dots, Home, Star } from '@/shared/icons';

const Sidebar = () => {
    const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
    const [connectedWallet, setConnectedWallet] = React.useState(false);
    const [mobileMenu, setMobileMenu] = React.useState(false);

    return (
        <>
            <div
                className={cn(styles.sidebar, {
                    [styles.active]: mobileMenu
                })}
            >
                <div className={styles.sidebarTop}>
                    <div className={styles.sidebarLogoInner}>
                        <Link
                            href="/"
                            className={styles.sidebarLogo}
                            onClick={() => setMobileMenu(false)}
                        >
                            <Image src="/img/logo.png" alt="logo" fill />
                        </Link>

                        <button
                            className={cn(styles.button, styles.sidebarClose)}
                            onClick={() => setMobileMenu(false)}
                        >
                            <Cross />
                        </button>
                    </div>

                    <nav className={styles.sidebarNav}>
                        <Link
                            href="/"
                            className={cn(styles.sidebarNavLink, styles.active)}
                            onClick={() => setMobileMenu(false)}
                        >
                            <Home />
                            Dashboard
                        </Link>

                        <Link
                            href="/reputation"
                            className={styles.sidebarNavLink}
                            onClick={() => setMobileMenu(false)}
                        >
                            <Star />
                            Reputation
                        </Link>

                        <Link
                            href="/"
                            className={styles.sidebarNavLink}
                            onClick={() => setMobileMenu(false)}
                        >
                            <Stats />
                            Statistics
                        </Link>
                    </nav>
                </div>

                <div className={styles.sidebarBottom}>
                    <div className={styles.sidebarBottomTheme}>
                        <button
                            className={cn(
                                styles.button,
                                styles.sidebarThemeItem,
                                {
                                    [styles.active]: theme === 'dark'
                                }
                            )}
                            onClick={() => setTheme('dark')}
                        >
                            <Moon />
                        </button>

                        <button
                            className={cn(
                                styles.button,
                                styles.sidebarThemeItem,
                                {
                                    [styles.active]: theme === 'light'
                                }
                            )}
                            onClick={() => setTheme('light')}
                        >
                            <Sun />
                        </button>
                    </div>

                    <button
                        className={cn(styles.button, styles.sidebarBottomMore)}
                    >
                        <Dots />
                    </button>

                    <button
                        className={cn(
                            styles.button,
                            styles.sidebarMobileButton
                        )}
                        onClick={() => {
                            setMobileMenu(false);
                            setConnectedWallet(prev => !prev);
                        }}
                    >
                        {connectedWallet
                            ? 'Disonnect Wallet'
                            : 'Connect Wallet'}
                    </button>
                </div>
            </div>
            <div className={styles.mobileMenu}>
                <Link href="/" className={styles.mobileMenuLogo}>
                    <Image src="/img/logo.png" alt="logo" fill />
                </Link>

                <Link href="/" className={styles.mobileMenuLink}>
                    <Home />
                    Dashboard
                </Link>

                <Link href="/" className={styles.mobileMenuLink}>
                    <Star />
                    Reputation
                </Link>

                <button
                    className={cn(styles.button, styles.mobileMenuButton)}
                    onClick={() => setMobileMenu(true)}
                >
                    <Dots />
                    More
                </button>
            </div>
        </>
    );
};

export default Sidebar;
