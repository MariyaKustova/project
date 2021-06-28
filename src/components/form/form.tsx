import s from "./index.module.scss";
import React from "react";
import { message, Button } from 'antd';
import { InputSearch } from "../search/search";
import { SelectRegions } from "../selectRegions/select";
import { SelectTypes } from "../selectTypes/selectTypes";
import { useActions } from "../../hooks/useActions";

export const Form = () => {
    enum requestType {
        vacancies = "Вакансии",
        summary = "Резюме",
    }

    let sendingData = {
        type: requestType.vacancies,
        keyWord: [""],
        areaName: "Все регионы",
    }

    const { data__getVacancies } = useActions();
    const { data__getSummaries } = useActions();

    const success = () => {
        message.success('Ваш запрос успешно отправлен');
    };

    const onChangeInput = (e: any): void => {
        const value: string = e.target.value;
        if (value.indexOf(",") !== -1) {
            const arrKeyWords = value.split(",");
            sendingData.keyWord = [...arrKeyWords];
            console.log(arrKeyWords);
        } else if (value.indexOf(" ") !== -1) {
            const arrKeyWords = value.split(" ");
            sendingData.keyWord = [...arrKeyWords];
            console.log(arrKeyWords, 2);
        } else {
            sendingData.keyWord = [value];
        }
    }

    const onChangeSelectRegions = (e: any): void => {
        sendingData.areaName = e;
    }

    const onChangeSelectType = (e: any): void => {
        sendingData.type = e;
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (sendingData.keyWord[0].length > 0) {
            if(sendingData.type === requestType.vacancies) {
                data__getVacancies(sendingData);  
            } else {
                data__getSummaries(sendingData);  
            }              
        } else {
            alert("Введите название интересующей Вас профессии")
        }

    }

    return (
        <form className={s.form} onSubmit={onSubmit} >
            <SelectTypes onChange={onChangeSelectType} />
            <InputSearch onChange={onChangeInput} />
            <SelectRegions onChange={onChangeSelectRegions} />
            <Button onClick={success} type="primary" htmlType="submit" size="large" style={{ marginLeft: 15 }}>Сформировать отчет</Button>
        </form>
    )
}