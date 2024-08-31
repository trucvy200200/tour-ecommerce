import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios"
import { KEY_COOKIE } from "@/constants/key-cookie.constant"
import { BASE_CONSTANTS } from "@/constants/base.constant"
import { getFromCookieWithName, removeCookie, removeFromLocalStorage, saveToCookie, saveToLocalStorage } from "@/helpers/base.helper"
import queryString from "query-string"

const axiosClient = axios.create({
  baseURL: BASE_CONSTANTS.BASE_URL,
  timeout: 20000,
  paramsSerializer: (params: Record<string, any>) => {
    return queryString.stringify(params, { arrayFormat: "bracket" })
  }
})

axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getFromCookieWithName(null, KEY_COOKIE.TOKEN) //token is value
    const headers: AxiosRequestHeaders = {
      Authorization: `Bearer ${token}`
    }

    if (token) config.headers = { ...config.headers, ...headers }
    return config
  },
  (err: any) => {
    return Promise.reject(err)
  }
)

axiosClient.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res && res.data) return res.data
    return res
  },
  async (err: AxiosError) => {
    if (err.response && err.response?.status === 401) {
      removeFromLocalStorage("breadCrumb")
      removeFromLocalStorage("token")
      removeFromLocalStorage("isLogin")
      removeFromLocalStorage("userData")
    }
    if (err.response && err.response.data) return err.response.data
    return Promise.reject(err)
  }
)

export default axiosClient