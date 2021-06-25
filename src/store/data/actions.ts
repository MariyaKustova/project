import { IRegion } from "../../models/IRegion";
import { DataAction, IDataActionTypes } from "./types";

//Записать регионы в store

export const data__setRegions = (regions: Array<IRegion> | null) : DataAction => ({
    type: IDataActionTypes.DATA__SET_REGIONS,
    payload: regions,
});
