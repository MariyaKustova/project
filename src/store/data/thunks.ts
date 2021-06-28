import { GetState } from "../index";
import { data__setRegions } from "./actions";
import { data__setVacancies } from "./actions";
import { API } from "../../API";

//Получили все регионы

export const data__getRegions = () => async (dispatch: any, getState: GetState) => {
    try {
        const regions = await API.regions.getAll();
        dispatch(data__setRegions(regions));
    } catch (e) {
        console.error("Ошибка при загрузке регионов", e)
    }
}

// Получили информацию по вакансиям

export const data__getVacancies = (data: object) => async (dispatch: any, getState: GetState) => {
    try {
        const vacancies = await API.vacancies.getAll(data);
        dispatch(data__setVacancies(vacancies))
    } catch (e) {
        console.error("Ошибка при загрузке данных", e)
    }
}

// Получили информацию по вакансиям

export const data__getSummaries = (data: object) => async (dispatch: any, getState: GetState) => {
    try {
        const summaries = await API.summaries.getAll(data);
        dispatch(data__setVacancies(summaries))
    } catch (e) {
        console.error("Ошибка при загрузке данных", e)
    }
}