import { TOUR_MODEL } from "@/models/tour.model"
import { createHook, createStore } from "react-sweet-state"
import { getTours, getToursById } from "./tour.action"

export type State = {
  list: Array<TOUR_MODEL>
  detail: TOUR_MODEL
}

const initialState: State = {
  list: [],
  detail: {
    id: "",
    address: "",
    delFlg: "",
    description: "",
    duration: 0,
    images: [],
    location: "",
    name: "",
    phone: "",
    plan: "",
    priceAdult: 0,
    priceChild: 0,
    regulation: ""
  }
}

const actions = {
  getTours,
  getToursById
}

const Store = createStore({
  initialState,
  actions
})

export const useTours = createHook(Store)
