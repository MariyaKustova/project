import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";

export const SelectTypes = ({onChange}) => {
    const { Option } = Select;
    
    const types: any[] = [];
    const arrTypes: string[] = ["Вакансии", "Резюме"];
    arrTypes.forEach(item => types.push(<Option key={item} value={item}>{item}</Option>))
    return (
        <Select size="large" defaultActiveFirstOption={true} defaultValue="Вакансии" maxTagCount={10} onChange={onChange()} style={{ width: 200, marginLeft: 15 }}>
            {types}
        </Select>
    )
}