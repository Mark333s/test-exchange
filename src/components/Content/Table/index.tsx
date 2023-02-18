import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SWAP } from "../../../assets/constants";
import { selectCurrencie } from "../../../redux/slices/exchangeSlice";

import styles from './Table.module.scss';

export const Table: React.FC = () => {
    const { conversion_rates, conversion_ratesEur } = useSelector(selectCurrencie);
    const [CurrencyDate, setCurrencyDate] = useState<string>("Currency/CurrencyDate");
    const [buy, setBuy] = useState<string>("Buy");
    const [sell, setSell] = useState<string>("Sell");
    const [USDUAH, setUSDUAH] = useState<string>("USD/UAH");
    const [usdBuy, setUsdBuy] = useState<string>("");
    const [usdSell, setUsdSell] = useState<string>("");
    const [EURUAH, setEURUAH] = useState<string>("EUR/UAH");
    const [EURUSD, setEURUSD] = useState<string>("EUR/USD");
    const [eurBuy, setEurBuy] = useState<string>("");
    const [eurSell, setEurSell] = useState<string>("");
    const [eurToUsdBuy, setEurToUsdBuy] = useState<string>("");
    const [eurToUsdSell, setEurToUsdSell] = useState<string>("");

    useEffect(() => {
        setUsdBuy(conversion_rates.UAH);
        setUsdSell(conversion_rates.UAH);
        setEurBuy(conversion_ratesEur.UAH);
        setEurSell(conversion_ratesEur.UAH);
        setEurToUsdBuy(conversion_ratesEur.USD);
        setEurToUsdSell(conversion_ratesEur.USD);
    }, [conversion_rates, conversion_ratesEur]);

    const onChangeCurrencyDate = (value: string) => {
        setCurrencyDate(value);
    };
    const onChangeBuy = (value: string) => {
        setBuy(value);
    };
    const onChangeSell = (value: string) => {
        setSell(value);
    };
    const onChangeUSDUAH = (value: string) => {
        setUSDUAH(value);
    };
    const onChangeUsdBuy = (value: string) => {
        setUsdBuy(value);
    };
    const onChangeUsdSell = (value: string) => {
        setUsdSell(value);
    };
    const onChangeEURUAH = (value: string) => {
        setEURUAH(value);
    };
    const onChangeEurBuy = (value: string) => {
        setEurBuy(value);
    };
    const onChangeEurSell = (value: string) => {
        setEurSell(value);
    };
    const onChangeEURUSD = (value: string) => {
        setEURUSD(value);
    };
    const onChangeEurToUsdBuy = (value: string) => {
        setEurToUsdBuy(value);
    };
    const onChangeEurtoUsdSell = (value: string) => {
        setEurToUsdSell(value);
    };

    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableConteinrSecond}>
                <input value={CurrencyDate} onChange={(event) => onChangeCurrencyDate(event.target.value)} />
                <input value={buy} onChange={(event) => onChangeBuy(event.target.value)} />
                <input value={sell} onChange={(event) => onChangeSell(event.target.value)} />
                <input value={USDUAH} onChange={(event) => onChangeUSDUAH(event.target.value)} />
                <input value={usdBuy} onChange={(event) => onChangeUsdBuy(event.target.value)} />
                <input value={usdSell} onChange={(event) => onChangeUsdSell(event.target.value)} />
                <input value={EURUAH} onChange={(event) => onChangeEURUAH(event.target.value)} />
                <input value={eurBuy} onChange={(event) => onChangeEurBuy(event.target.value)} />
                <input value={eurSell} onChange={(event) => onChangeEurSell(event.target.value)} />
                <input value={EURUSD} onChange={(event) => onChangeEURUSD(event.target.value)} />
                <input value={eurToUsdBuy} onChange={(event) => onChangeEurToUsdBuy(event.target.value)} />
                <input value={eurToUsdSell} onChange={(event) => onChangeEurtoUsdSell(event.target.value)} />
            </div>

        </div>
    );
};