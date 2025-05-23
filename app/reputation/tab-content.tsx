'use client';

import React, { useState } from 'react';

import CardItem from './card-item';

import styles from '../page.module.css';

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

const cards: Card[] = [
    {
        id: 1,
        type: CardType.Master,
        name: 'Master Level Card 1',
        status: Status.Date,
        date: '19.02.2023',
        percent: 87
    },
    {
        id: 2,
        type: CardType.Pro,
        name: 'Pro Level Card 2',
        status: Status.Date,
        date: '19.02.2023',
        percent: 0
    },
    {
        id: 3,
        type: CardType.Rokie,
        name: 'Rookie Level Card 3',
        status: Status.Live,
        date: '19.02.2023',
        percent: 29
    },
    {
        id: 4,
        type: CardType.Pro,
        name: 'Master Level Card 4',
        status: Status.Finished,
        date: '19.02.2023',
        percent: 70
    },
    {
        id: 5,
        type: CardType.Master,
        name: 'Master Level Card 5',
        status: Status.Finished,
        date: '19.02.2023',
        percent: 56
    },
    {
        id: 6,
        type: CardType.Rokie,
        name: 'Rookie Level Card 6',
        status: Status.Live,
        date: '20.02.2023',
        percent: 12
    },
    {
        id: 7,
        type: CardType.Pro,
        name: 'Pro Level Card 7',
        status: Status.Date,
        date: '21.02.2023',
        percent: 0
    },
    {
        id: 8,
        type: CardType.Master,
        name: 'Master Level Card 8',
        status: Status.Live,
        date: '22.02.2023',
        percent: 92
    },
    {
        id: 9,
        type: CardType.Rokie,
        name: 'Rookie Level Card 9',
        status: Status.Finished,
        date: '23.02.2023',
        percent: 100
    },
    {
        id: 10,
        type: CardType.Pro,
        name: 'Pro Level Card 10',
        status: Status.Finished,
        date: '24.02.2023',
        percent: 63
    },
    {
        id: 11,
        type: CardType.Master,
        name: 'Master Level Card 11',
        status: Status.Date,
        date: '25.02.2023',
        percent: 0
    },
    {
        id: 12,
        type: CardType.Rokie,
        name: 'Rookie Level Card 12',
        status: Status.Live,
        date: '26.02.2023',
        percent: 44
    }
];

const TabContent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <div className={styles.reputationSubTabs}>
                <button
                    onClick={() => setActiveIndex(0)}
                    className={`${styles.reputationSubTab} ${
                        activeIndex == 0 ? styles.reputationSubTabActive : ''
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => setActiveIndex(1)}
                    className={`${styles.reputationSubTab} ${
                        activeIndex == 1 ? styles.reputationSubTabActive : ''
                    }`}
                >
                    Rookie Round
                </button>
                <button
                    onClick={() => setActiveIndex(2)}
                    className={`${styles.reputationSubTab} ${
                        activeIndex == 2 ? styles.reputationSubTabActive : ''
                    }`}
                >
                    Pro Round
                </button>
                <button
                    onClick={() => setActiveIndex(3)}
                    className={`${styles.reputationSubTab} ${
                        activeIndex == 3 ? styles.reputationSubTabActive : ''
                    }`}
                >
                    Master Round
                </button>
            </div>

            {activeIndex == 0 && (
                <div className={styles.reputationCards}>
                    {cards.map(card => (
                        <CardItem key={card.id} card={card} />
                    ))}
                </div>
            )}

            {activeIndex == 1 && (
                <div className={styles.reputationCards}>
                    {cards.slice(0, 4).map(card => (
                        <CardItem key={card.id} card={card} />
                    ))}
                </div>
            )}

            {activeIndex == 2 && (
                <div className={styles.reputationCards}>
                    {cards.slice(4, 8).map(card => (
                        <CardItem key={card.id} card={card} />
                    ))}
                </div>
            )}

            {activeIndex == 3 && (
                <div className={styles.reputationCards}>
                    {cards.slice(8, 12).map(card => (
                        <CardItem key={card.id} card={card} />
                    ))}
                </div>
            )}
        </>
    );
};

export default TabContent;
