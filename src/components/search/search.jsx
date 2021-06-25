import React from "react"
import { Input } from 'antd';

export const InputSearch = ({onChange}) => {
    return (
        <Input size="large" maxLength="100" placeholder="Введите название профессии" style={{ width: 300 }} onChange = {(e) => onChange(e)}/>
    )
}
