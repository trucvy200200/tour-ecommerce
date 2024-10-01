import { USER_MODEL } from "@/models/user.model"
import { createHook, createStore } from "react-sweet-state"
import { getUserById, uploadAvatar } from "./user.action"

export type State = {
  user: USER_MODEL
}

const initialState: State = {
  user: {
    id: "",
    name: "",
    email: "",
    role: "",
    phone: "",
    birthday: "",
    gender: "",
    address: "",
    avatar: ""
  }
}

const actions = {
  getUserById,
  uploadAvatar
}

const Store = createStore({
  initialState,
  actions
})

export const useUser = createHook(Store)
