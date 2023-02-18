import React from "react";

import styles from './Content.module.scss';
import { Inputs } from "./Inputs";
import { Table } from "./Table";

export const Content: React.FC = () => {
    return (
        <div className={styles.contentContainer}>
            <Table />
            <Inputs />
        </div>
    );
};