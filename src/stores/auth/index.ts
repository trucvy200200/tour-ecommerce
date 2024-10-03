import { loginAsync, registerAsync, logoutAsync, setUser, changePassword } from "./auth.action"
import { createHook, createStore } from "react-sweet-state"
import { selector } from "./auth.selector"
import { USER_MODEL } from "@/models/user.model"

export type State = {
  userData: USER_MODEL
  isLogin: boolean
  isRegister: boolean
}

const initialState: State = {
  userData: {
    id: "",
    name: "",
    email: "",
    role: "",
    phone: "",
    birthday: "",
    gender: "",
    address: "",
    avatar: ""
  },
  isLogin: false,
  isRegister: false
}

const actions = {
  logoutAsync,
  loginAsync,
  registerAsync,
  setUser,
  changePassword
}

const Store = createStore({
  initialState,
  actions
})

export const useAuth = createHook(Store, { selector: selector })
