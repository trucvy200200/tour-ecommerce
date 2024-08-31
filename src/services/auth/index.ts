import API from "@/configs/api/repository-api"
import { IReqLogin, IReqRegister, IReqVerifyMail } from "./auth.interface"

export const loginService = (payload: IReqLogin): Promise<any> => {
  return API.post(`/sign-in`, {
    body: { ...payload }
  }) as any
}

export const logoutService = (): Promise<any> => {
  return API.post(`/log-out`) as any
}

export const registerService = (payload: IReqRegister): Promise<any> => {
  return API.post(`/sign-up`, {
    body: { ...payload }
  }) as any
}

export const sendMailForgotPassword = (payload: IReqVerifyMail): Promise<ReturnResponse<any>> => {
  return API.post(`/forgot-password`, {
    body: { ...payload }
  }) as any
}
