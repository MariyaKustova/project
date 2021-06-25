import { IRegion } from "../../models/IRegion";

export enum IDataActionTypes {
    DATA__SET_REGIONS = "[DATA] SET_REGIONS",
}

//Типы ActionCreators

interface SetRegionsAction {
    type: IDataActionTypes.DATA__SET_REGIONS;
    payload: Array<IRegion> | null;
}

// Общий тип Action
export type DataAction = 
| SetRegionsAction