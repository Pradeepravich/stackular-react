import { isEmpty } from "lodash";
import { api } from "./ApiRoutes";
import axiosInstance from "../utils/axios";

export interface UndeleteApiResponseData {
  processedIds: number[];
  unProcessed:
    | {
        id: number;
        errorMessage: string;
      }[]
    | [];
}

const useUndeleteGLCodeApi = async (companyId: string) => {
  try {
    if (isEmpty(companyId)) {
      throw new Error("glCodes empty");
    }
    const res = await axiosInstance.post(api.undeleteGLCode(companyId));
    return res.data as UndeleteApiResponseData;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default useUndeleteGLCodeApi;
