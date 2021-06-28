import React from "react";
import s from "./index.module.scss";
import { Form } from "../../components/form/form";
import { Schedule } from "../../components/schedule/Schedule";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const PageIndex = () => {    
    const { data } = useTypedSelector(state => state);
    return (
        <>
            <div className={s.content}>
                <div className={s.container}>
                    <h2>Создай свою аналитику</h2>
                    <Form />
                </div>
            </div>
            <div className={s.report}>
                {(!data.vacancies || data.vacancies.length === 0) ? (<p>Здесь будет ваш отчет</p>) : (<Schedule/>)}
            </div>
        </>
    )
}