import React from "react";
import { EXCHANGE } from "../../assets/constants";

import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <h3>Exchange</h3>
            <img src={EXCHANGE} alt='exchange' />
        </div>
    );
};