import { createHook, createStore } from "react-sweet-state"
import { setBookingData, createBooking, payment } from "./booking.action"

export type State = {
  detail: any
}

const initialState: State = {
  detail: {
    childNumber: 0,
    adultNumber: 0,
    totalPrice: 0,
    adults: [],
    children: [],
    fullName: "",
    phone: ""
  }
}

const actions = {
  setBookingData,
  createBooking,
  payment
}

const Store = createStore({
  initialState,
  actions
})

export const useBooking = createHook(Store)