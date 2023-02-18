import React from "react";
import { EXCHANGE } from "../../assets/constants";

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.contentContainer}>
                <h3>Exchange</h3>
                <img src={EXCHANGE} alt='exchange' />
            </div>
        </div>
    );
};