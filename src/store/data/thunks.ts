import { GetState } from "../index";
import { data__setRegions } from "./actions";
import { API } from "../../API";

//Получили все регионы

export const data__getRegions = () => async (dispatch: any, getState: GetState) => {
    try {
        const regions = await API.regions.getAll();
        dispatch(data__setRegions(regions))
    } catch (e) {
        console.error("Ошибка при загрузке регионов", e)
    }
}