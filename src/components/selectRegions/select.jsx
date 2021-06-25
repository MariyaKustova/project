import React from "react";
import { Select } from 'antd';
import "antd/dist/antd.css";

const { Option } = Select;

export const SelectRegions = ({ onChange }) => {
    // const { data } = useTypedSelector(state => state);
    // const { data__getRegions } = useActions();

    // useEffect(() => {
    //     data__getRegions();
    // })

    // if (!data.regions || data.regions.length === 0) {
    //     return <div>Loading...</div>
    // }

    let initialRegions = [{ areaName: "Все регионы" }, { areaName: "Пермский край" }];

    // const regions = [...initialRegions, ...arrRegions]

    // for (let i = 0; i < 36; i++) {
    //     children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }

    const arrRegions = [];

    initialRegions.forEach(item => arrRegions.push(<Option key={item.areaName}>{item.areaName}</Option>))

    return (
        <Select size="large" defaultActiveFirstOption="true" defaultValue="Все регионы" maxTagCount="10" onChange={onChange()} style={{ width: 200, marginLeft: 15 }}>
            {arrRegions}
        </Select>
    )
}