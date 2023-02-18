import React from 'react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <div className={styles.footerContainer}>
            <p className={styles.footerText}>2022 all rights reserved</p>
        </div>
    );
};

