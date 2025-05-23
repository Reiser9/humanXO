import React from 'react';
import type { Metadata } from 'next';

import Sidebar from './sidebar';

import './globals.css';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'XO Dashboard'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className={styles.content}>
                    <Sidebar />
                    {children}
                </div>
            </body>
        </html>
    );
}
