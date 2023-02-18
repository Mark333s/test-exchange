import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextField from '@mui/material/TextField';

import styles from './Inputs.module.scss';

import { SelectComponentChange } from "../SelectComponentChange";
import { SelectComponentGet } from "../SelectComponentGet";
import { SWAP } from "../../../assets/constants";

import { RootState, useAppDispatch } from "../../../redux/store";
import { fetchCurrencies, fetchCurrencieEUR, selectCurrencie } from "../../../redux/slices/exchangeSlice";

const defaultValues = ["UAH", "USD", "EUR"];

export const Inputs: React.FC = () => {
    const { conversion_rates, status } = useSelector(selectCurrencie);
    const dispatch = useAppDispatch();
    const [fromCurrency, setFromCurrency] = useState<string>("UAH");
    const [toCurrency, setToCurrency] = useState<string>("USD");
    const [fromPrice, setFromPrice] = useState<number>(0);
    const [toPrice, setToPrice] = useState<number>(0);
    const [swap, setSwap] = useState<boolean>(false);

    const getCurrencies = async () => {
        dispatch(fetchCurrencies());
        dispatch(fetchCurrencieEUR());
    };

    useEffect(() => {
        getCurrencies();
    }, []);

    const onChangeFromPrice = (value: number) => {
        //@ts-ignore
        const price = value / conversion_rates[fromCurrency];
        //@ts-ignore
        const result = price * conversion_rates[toCurrency];
        //@ts-ignore
        setToPrice(result.toFixed(2));
        setFromPrice(value);
    };

    const onChangeToPrice = (value: number) => {
        //@ts-ignore
        const result = conversion_rates[fromCurrency] / conversion_rates[toCurrency] * value;
        //@ts-ignore
        setFromPrice(result.toFixed(2));
        setToPrice(value);
    };

    useEffect(() => {
        onChangeFromPrice(fromPrice);
    }, [fromCurrency]);

    useEffect(() => {
        onChangeToPrice(toPrice);
    }, [toCurrency]);


    return (
        <div className={styles.inputsContainer}>
            {
                !swap ?
                    <>
                        <div>
                            <p>Change</p>
                            <input
                                type='number'
                                min={0}
                                max={10000000}
                                maxLength={8}
                                value={fromPrice}
                                placeholder='0'
                                onChange={(event: React.ChangeEvent<any>) => onChangeFromPrice(event.target.value)}
                                className={styles.firstInput} />
                        </div>

                        <SelectComponentChange
                            currency={fromCurrency}
                            onChangeCurrency={setFromCurrency}
                            defaultValues={defaultValues}
                        />
                        <div className={styles.selectContainer}>
                            <img src={SWAP} alt='swap' onClick={() => setSwap(!swap)} />
                        </div>
                        <div>
                            <p>Get</p>
                            <input
                                type='number'
                                placeholder='0'
                                min={0}
                                max={10000000}
                                maxLength={8}
                                value={toPrice}
                                onChange={(event: React.ChangeEvent<any>) => onChangeToPrice(event.target.value)}
                                className={styles.secondtInput} />
                        </div>

                        <SelectComponentGet
                            currency={toCurrency}
                            onChangeCurrency={setToCurrency}
                            defaultValues={defaultValues}
                        />
                    </>
                    : <>
                        <div>
                            <p>Change</p>
                            <input
                                type='number'
                                placeholder='0'
                                min={0}
                                max={10000000}
                                maxLength={8}
                                value={toPrice}
                                onChange={(event: React.ChangeEvent<any>) => onChangeToPrice(event.target.value)}
                                className={styles.secondtInput} />
                        </div>

                        <SelectComponentGet
                            currency={toCurrency}
                            onChangeCurrency={setToCurrency}
                            defaultValues={defaultValues}
                        />
                        <div className={styles.selectContainer}>
                            <img src={SWAP} alt='swap' onClick={() => setSwap(!swap)} />
                        </div>
                        <div>
                            <p>Get</p>
                            <input
                                type='number'
                                placeholder='0'
                                min={0}
                                max={10000000}
                                maxLength={8}
                                value={fromPrice}
                                onChange={(event: React.ChangeEvent<any>) => onChangeFromPrice(event.target.value)}
                                className={styles.firstInput} />
                        </div>

                        <SelectComponentChange
                            currency={fromCurrency}
                            onChangeCurrency={setFromCurrency}
                            defaultValues={defaultValues}
                        />

                    </>
            }


        </div>
    );
};