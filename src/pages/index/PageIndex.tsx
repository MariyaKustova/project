import React from "react";
import s from "./index.module.scss";
import { Form } from "../../components/form/form";
//import { useTypedSelector } from "../../hooks/useTypedSelector";
//import { useActions } from "../../hooks/useActions";
//import { useEffect } from "react";

export const PageIndex = () => {
    
    return (
        <>
            <div className={s.content}>                
                <div className={s.container}>
                <h2>Создай свою аналитику</h2>
                    <Form />
                </div>
            </div>
            <div className={s.report}>
                <p>Здесь будет ваш отчет</p>
            </div>
        </>
    )
}