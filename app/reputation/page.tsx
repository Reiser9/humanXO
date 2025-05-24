'use client';

import React, { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import TabContent from './tab-content';

import styles from '../page.module.css';

import { Crown, Flag, Live } from '@/shared/icons';

const Reputation = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.contentArea}>
            <div className={styles.contentAreaWrapper}>
                <div className={styles.dashboard}>
                    <div className={styles.contentAreaTop}>
                        <button className={cn(styles.button, styles.connectButton)}>
                            Connect Wallet
                        </button>
                    </div>
                    <div className={styles.dashboardWrapper}>
                        <div
                            className={`${styles.reputationBlock} ${styles.reputationBlockRewards}`}
                        >
                            <Image src="/img/rewards.png" alt="bg" fill />
                            <div className={styles.reputationBlockContent}>
                                <p className={styles.reputationBlockTitle}>
                                    750 ZKOS
                                </p>
                                <p className={styles.reputationBlockText}>
                                    Total{' '}
                                    <span className={styles.reputationBold}>
                                        Rewards Distributed
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className={styles.reputationBlock}>
                            <Image src="/img/burned.png" alt="bg" fill />
                            <div className={styles.reputationBlockContent}>
                                <p className={styles.reputationBlockTitle}>
                                    750 ZKOS
                                </p>
                                <p className={styles.reputationBlockText}>
                                    Total{' '}
                                    <span className={styles.reputationBold}>
                                        Burned Tokens
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.reputationTabsWrapper}>
                        <div className={styles.reputationTabs}>
                            <button
                                onClick={() => setActiveIndex(0)}
                                className={`${styles.item} ${
                                    styles.reputationTab
                                } ${
                                    activeIndex == 0
                                        ? styles.reputationTabActive
                                        : ''
                                }`}
                            >
                                <Live width={18} />
                                Live
                            </button>
                            <button
                                onClick={() => setActiveIndex(1)}
                                className={`${styles.item} ${
                                    styles.reputationTab
                                } ${
                                    activeIndex == 1
                                        ? styles.reputationTabActive
                                        : ''
                                }`}
                            >
                                <Flag width={18} />
                                Finished
                            </button>
                        </div>
                        <Link
                            href="#"
                            className={`${styles.reputationLeaderboard} ${styles.item}`}
                        >
                            <Crown width={18} />
                            Leaderboard
                        </Link>
                    </div>
                    {activeIndex == 0 ? <TabContent /> : <p>No data</p>}
                </div>
            </div>
        </div>
    );
};

export default Reputation;
