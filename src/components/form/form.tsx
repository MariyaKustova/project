import s from "./index.module.scss";
import React from "react";
import { Button } from 'antd';
import "antd/dist/antd.css";
import { InputSearch } from "../search/search";
import { SelectRegions } from "../selectRegions/select";
import { SelectTypes } from "../selectTypes/selectTypes";
import { IRegion } from "../../models/IRegion";

export const Form = () => {
    let data:IRegion;

    const onChangeInput = (e: any) => {
        console.log(e)
        data.areaName = e.value;
    }

    const onChangeSelectRegions = (e: any) => {
        console.log(e);
    }

    const onChangeSelectType = (e: Event) => {
        console.log(e);
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log(data)
    }

    return (
            <form className={s.form} onSubmit={onSubmit} >
                <SelectTypes onChange={onChangeSelectType} />
                <InputSearch onChange={onChangeInput} />
                <SelectRegions onChange={onChangeSelectRegions} />
                <Button type="primary" htmlType="submit" size="large" style={{ marginLeft: 15 }}>Сформировать отчет</Button>
            </form>
    )
}