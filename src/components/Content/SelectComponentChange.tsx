import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export type SelectComponentProps = {
    onChangeCurrency: any,
    defaultValues: string[],
    currency: string
}

export const SelectComponentChange: React.FC<SelectComponentProps> = ({ onChangeCurrency, defaultValues, currency }) => {


    return (
        <div className="selectContainer">
            <FormControl variant="standard" size="medium">
                <Select
                    value={currency}
                    onChange={(event) => onChangeCurrency(event.target.value)}
                >
                    {
                        defaultValues.map((cur: string, index) => {
                            return <MenuItem key={index} value={cur}>{cur}</MenuItem>;
                        })
                    }
                </Select>
            </FormControl>
        </div>
    )
};