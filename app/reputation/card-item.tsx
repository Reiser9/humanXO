import React from 'react';
import Image from 'next/image';

import styles from '../page.module.css';

import {
    CardKey,
    CardLive,
    CardType1,
    CardType2,
    CardType3,
    Gift,
    Login,
    Star
} from '@/shared/icons';

enum CardType {
    Rokie = 'rokie',
    Pro = 'pro',
    Master = 'master'
}

enum Status {
    Live = 'live',
    Date = 'date',
    Finished = 'finished'
}

interface Card {
    id: number;
    type: CardType;
    name: string;
    status: Status;
    date: string;
    percent: number;
}

interface Props {
    card: Card;
}

const typeIcons = {
    rokie: <CardType1 width={18} />,
    pro: <CardType2 width={12} />,
    master: <CardType3 width={12} />
};

const typePaths = {
    rokie: '/img/type1.png',
    pro: '/img/type2.png',
    master: '/img/type3.png'
};

const CardItem: React.FC<Props> = ({ card }) => {
    return (
        <div className={`${styles.reputationCard} ${styles[card.type]}`}>
            <div className={styles.reputationCardHeader}>
                <Image src={typePaths[card.type]} alt="bg" fill />
                <span
                    className={`${styles.reputationCardLabel} ${styles.item} ${
                        styles[card.status]
                    }`}
                >
                    {card.status == Status.Live && <CardLive width={12} />}
                    19.02.2023
                </span>
                <p className={`${styles.reputationCardTitle} ${styles.item}`}>
                    {typeIcons[card.type]}
                    {card.name}
                </p>
            </div>
            {card.status != Status.Live && (
                <div className={styles.reputationCardStats}>
                    <p className={styles.reputationCardStatsInfo}>
                        32/50 Participants
                    </p>
                    <div className={styles.reputationCardStatsDiagram}>
                        <div
                            className={styles.reputationCardStatsValue}
                            style={{ width: `${card.percent}%` }}
                        ></div>
                    </div>
                    <div className={styles.reputationCardStatsBottom}>
                        <div
                            className={styles.reputationCardStatsHighlitedText}
                        >
                            Rewarded
                        </div>
                        Burned
                    </div>
                </div>
            )}
            <div className={styles.reputationCardContent}>
                <div className={styles.reputationCardGroup}>
                    <div
                        className={`${styles.reputationCardItem} ${styles.item}`}
                    >
                        <Gift width={12} color={'#FF4D00'} />
                        500 ZKOS
                    </div>
                    <div
                        className={`${styles.reputationCardItem} ${styles.item}`}
                    >
                        <Login width={12} color={'#FF4D00'} />
                        50
                    </div>
                </div>
                <div className={styles.reputationCardGroup}>
                    <div
                        className={`${styles.reputationCardItem} ${styles.item}`}
                    >
                        <CardKey width={12} color={'#FF4D00'} />5 ZKOS
                    </div>
                    <div
                        className={`${styles.reputationCardItem} ${styles.item}`}
                    >
                        <Star width={12} color={'#FF4D00'} />5
                    </div>
                </div>
            </div>
            {card.status == Status.Live && (
                <button
                    className={`${styles.reputationCardBtn} ${styles.item}`}
                >
                    Start Now
                </button>
            )}
        </div>
    );
};

export default CardItem;
