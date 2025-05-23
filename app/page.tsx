'use client';

import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

import styles from './page.module.css';

import {
    Face,
    Home2,
    Key,
} from '@/shared/icons';

export default function HomePage() {
    const [connectedWallet, setConnectedWallet] = React.useState(false);
    
    return (
        <div className={styles.contentArea}>
            <div className={styles.contentAreaWrapper}>
                <div className={styles.contentAreaTop}>
                    <button
                        className={cn(styles.button, styles.connectButton)}
                        onClick={() => setConnectedWallet(prev => !prev)}
                    >
                        {connectedWallet
                            ? 'Disonnect Wallet'
                            : 'Connect Wallet'}
                    </button>
                </div>

                {connectedWallet ? (
                    <div className={styles.dashboard}>
                        <div className={styles.dashboardInfo}>
                            <div className={styles.dashboardInfoCircle}></div>

                            <p className={styles.dashboardInfoBread}>
                                <Home2 />
                                Dashboard
                            </p>

                            <p className={styles.dashboardInfoBalance}>
                                100 Zkos
                            </p>

                            <button
                                className={cn(
                                    styles.button,
                                    styles.dashboardInfoClaim
                                )}
                            >
                                Claim Rewards
                            </button>

                            <p className={styles.dashboardInfoEarned}>
                                Total Rewards Earned All Time
                            </p>

                            <p className={styles.dashboardInfoValue}>
                                7322 Zkos
                            </p>
                        </div>

                        <div className={styles.dashboardWrapper}>
                            <div className={styles.dashboardInvite}>
                                <Image src="/img/invite-bg.png" alt="bg" fill />

                                <div className={styles.dashboardInviteContent}>
                                    <p className={styles.dashboardInviteSoon}>
                                        Coming soon
                                    </p>

                                    <div
                                        className={
                                            styles.dashboardInviteTextBlock
                                        }
                                    >
                                        <p
                                            className={
                                                styles.dashboardInviteTitle
                                            }
                                        >
                                            Invite friends, earn rewards!
                                        </p>

                                        <p
                                            className={
                                                styles.dashboardInviteText
                                            }
                                        >
                                            Refer your friends and get extra
                                            bonuses when they join.
                                        </p>

                                        <p
                                            className={
                                                styles.dashboardInviteText
                                            }
                                        >
                                            The more you share, the more you
                                            earn!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.dashboardSync}>
                                <div
                                    className={styles.dashboardSyncCircle}
                                ></div>

                                <p className={styles.dashboardSyncTitle}>
                                    Sync Browser Extension
                                </p>

                                <p className={styles.dashboardSyncText}>
                                    To earn and claim your rewards, import and
                                    sync your HumanXO private key.
                                </p>

                                <div className={styles.dashboardSyncInputInner}>
                                    <input
                                        className={cn(
                                            styles.input,
                                            styles.dashboardSyncInput
                                        )}
                                        placeholder="Import Private Key"
                                    />

                                    <Key />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.welcome}>
                        <div className={styles.welcomeBlock}>
                            <div className={styles.welcomeCircle}></div>

                            <div className={styles.welcomeBlockContent}>
                                <div className={styles.welcomeBlockTitleInner}>
                                    <p>Welcome to</p>

                                    <p>HumanXO by zkOS.</p>
                                </div>

                                <p className={styles.welcomeBlockText}>
                                    Connect and start improving your on-chain
                                    reputation:
                                </p>

                                <p className={styles.welcomeBlockText}>
                                    By engaging with HumanXO, users strengthen
                                    their on-chain identity, unlock rewards and
                                    contribute to a more Sybil-resistant
                                    blockchain.
                                </p>

                                <button
                                    className={cn(
                                        styles.button,
                                        styles.welcomeBlockConnect
                                    )}
                                    onClick={() => setConnectedWallet(true)}
                                >
                                    Connect Wallet
                                </button>
                            </div>
                        </div>

                        <div className={styles.welcomeWrapper}>
                            <div className={styles.welcomeSolana}>
                                <div className={styles.welcomeSolanaImg}>
                                    <Image
                                        src="/img/solana.png"
                                        alt="Solana"
                                        fill
                                    />
                                </div>

                                <div className={styles.welcomeSolanaText}>
                                    <p>Built on Solana,</p>

                                    <p>designed to increase</p>

                                    <p>on-chain human activity.</p>
                                </div>
                            </div>

                            <div className={styles.welcomeExtension}>
                                <Face className={styles.welcomeExtensionIcon} />

                                <p className={styles.welcomeExtensionText}>
                                    Passively verify you&rsquo;re human, build
                                    reputation in the HumanXO ecosystem, and
                                    earn rewards.
                                </p>

                                <button
                                    className={cn(
                                        styles.button,
                                        styles.downloadExtension
                                    )}
                                >
                                    Download Browser Extension
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
