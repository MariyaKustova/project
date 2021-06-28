import { useTypedSelector } from "../../hooks/useTypedSelector";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import s from "./index.module.scss";

export const Schedule = () => {
    const { data } = useTypedSelector(state => state);
    const vacancies: any = data.vacancies;

    const labelStyle = {
        fontSize: "24px",
    }

    const itemStyle = {
        width: "250px",
        height: "30px",
        marginTop: "0"
    }

    const contentStyle = {
        fontSize: "16px",
    }
    return (
        <div className={s.wrapper}>
            <ResponsiveContainer width="100%" height={540}>
                <BarChart
                    width={500}
                    height={300}
                    data={vacancies}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    {"areaName" ? (
                        <XAxis dataKey="areaName" label={{ value: 'Название регионов', position: 'insideBottomRight', offset: -10 }} scale="band" />
                    ) : (
                        <XAxis dataKey="cityName" label={{ value: 'Название городов', position: 'insideBottomRight', offset: -10 }} scale="band" />
                    )}

                    <YAxis label={{ value: 'Уровень з/п', angle: -90, position: 'insideLeft', offset: -10 }} />
                    <Tooltip contentStyle={contentStyle} itemStyle={itemStyle} labelStyle={labelStyle} />
                    <Legend />
                    <Bar dataKey="minAvgSalary" name="Минимальная з/п" fill="#8884d8" />
                    <Bar dataKey="maxAvgSalary" name="Максимальная з/п" fill="#82ca9d" />
                    <Bar dataKey="avgMediana" name="Медианная з/п" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}