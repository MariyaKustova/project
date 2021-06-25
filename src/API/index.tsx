import axios, { AxiosInstance } from "axios";
import {ApiRegions} from "../API/regions";


class Api {
  private axios: AxiosInstance;
  regions: ApiRegions;
  constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.regions = new ApiRegions(axios);
  }
}
//главный объект для запросов
let API: Api;
const createAPI = (headers = {}) => {
  API = new Api(
    axios.create({
      withCredentials: false,
      baseURL: "https://jsonplaceholder.typicode.com",
      headers,
      // headers: {
      //   //  "Authorization": "API_KEY"
      // },
    })
  );
};
createAPI({});

export { API, createAPI };

export enum HTTP_STATUS {
  AppError = 100,
  ServerError = 500,
  Access = 200,
  Error = 400,
  Unauthorized = 401,
  Forbidden = 403,
  BadRequest = 400,
  NotFound = 404,
}
