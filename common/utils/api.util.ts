import axios, { ResponseType } from "axios";
import { httpStatus, messages } from "../constants";

interface IRequestConfig {
  params?: any;
  data?: any;
  responseType?: ResponseType;
}

type IResponseError = {
  message?: string;
  isUnauthorizedError?: boolean;
};

function getError(error: any): IResponseError {
  const response = error.response;

  if (!response) {
    return { message: messages.GENERAL_ERROR, isUnauthorizedError: false };
  } else if (
    response.status == httpStatus.BAD_REQUEST ||
    response.status == httpStatus.NOT_FOUND
  ) {
    if (response.data.message) {
      return { message: response.data.message, isUnauthorizedError: false };
    } else {
      return { message: messages.GENERAL_ERROR, isUnauthorizedError: false };
    }
  } else {
    return { message: messages.GENERAL_ERROR, isUnauthorizedError: false };
  }
}

const apiHelper = {
  async get<T = any>(url: string, config: IRequestConfig = {}) {
    const { params, responseType } = config;

    return axios.get<T>(url, { params, responseType });
  },

  async execute(
    method: "get",
    url: string,
    config?: IRequestConfig
  ): Promise<any> {
    try {
      let response = await this[method](url, config);
      return response.data;
    } catch (error) {
      return getError(error);
    }
  },
};

export default apiHelper;
