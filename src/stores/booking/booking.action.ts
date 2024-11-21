import { createBookingService, paymentService } from "@/services/booking"
import { State } from "./index"
import { BaseAction } from ".."
import { IReqBooking, IReqPayment } from "@/services/booking/booking.interface"
import { notifyError } from "@/helpers/toast.helper"

type Actions = BaseAction<State>

export const setBookingData = (params?: any) => {
  return async (actions: Actions) => {
    actions.setState({
      ...actions.getState(),
      detail: params
    })
  }
}

export const createBooking =
  (payload: IReqBooking, handleSuccess: (e: any) => void, handleError: (err: any) => void) =>
  async ({ dispatch, getState, setState }: Actions) => {
    try {
      const result = await createBookingService(payload)
      if (result?.id) {
        handleSuccess(result)
      } else {
        handleError(result?.message)
      }
      return result
    } catch (error: any) {
      const result = error?.response
      notifyError("Server error")
      return result
    }
  }

export const payment =
  (payload: IReqPayment, handleSuccess: () => void, handleError: (err: any) => void) =>
  async ({ dispatch, getState, setState }: Actions) => {
    try {
      const result = await paymentService(payload)
      if (result?.status === "success") {
        handleSuccess()
      } else {
        handleError("Payment failed")
      }
      return result
    } catch (error: any) {
      const result = error?.response
      notifyError("Server error")
      return result
    }
  }
