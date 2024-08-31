import { BaseAction } from ".."
import { State } from "./index"
import { notifyError, notifySuccess } from "@/helpers/toast.helper"
import { KEY_COOKIE } from "@/constants/key-cookie.constant"
import { LOGIN_ERRORS } from "@/constants/base.constant"
import { loginService, registerService, logoutService } from "@/services/auth"
import { MESS_LOGIN, MESS_REGISTER } from "@/constants/message-notification"
import { saveToCookie, saveToLocalStorage, removeFromLocalStorage, removeCookie, getFromLocalStorage } from "@/helpers/base.helper"
import { IReqLogin, IReqRegister, IReqLogout } from "@/services/auth/auth.interface"

type Actions = BaseAction<State>

//USER
export const setUser =
  (payload: { userData: any; isLogin?: boolean; isRegister?: boolean }) =>
    ({ setState, getState }: Actions) => {
      setState({ ...getState(), ...payload })
    }

export const loginAsync = (payload: IReqLogin) =>
  async ({ dispatch, getState, setState }: Actions) => {
    try {
      const result = await loginService(payload)

      if (result.errCode === 200) {
        saveToLocalStorage("token", result?.accessToken)
        saveToLocalStorage("isLogin", true)

        if (result?.userInfo) {
          saveToLocalStorage("userData", result?.userInfo)
          dispatch(
            setUser({
              userData: { ...result?.userInfo },
              isLogin: true
            })
          )
          notifySuccess('Login successfully')
        }
      } else {
        notifyError(result?.message)
      }

      return result
    } catch (error: any) {
      const result = error?.response
      notifyError("Server error")
      return result
    }
  }

export const registerAsync =
  (payload: IReqRegister) =>
    async ({ dispatch, getState, setState }: Actions) => {
      try {
        const result = await registerService(payload)
        if (result.errCode === 200) {
          notifySuccess("Register successfully")
        } else {
          notifyError((result?.message) as any)
        }
        return result
      } catch (error: any) {
        const result = error?.response
        notifyError("Server error")
        return result
      }
    }

export const logoutAsync = (payload: IReqLogout): any => async ({ setState, getState }: Actions) => {
  try {
    const result = await logoutService(payload)
    removeFromLocalStorage("token")
    removeFromLocalStorage("userData")
    removeFromLocalStorage("isLogin")
    setState({
      ...getState(),
      isRegister: false,
      isLogin: false,
      userData: {}
    })
    notifySuccess("Logout successfully")

    return result
  } catch (error: any) {
    const result = error?.response
    notifyError("Server error")
    return result
  }
}
