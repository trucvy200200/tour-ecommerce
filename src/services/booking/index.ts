import API from "@/configs/api/repository-api"
import { IReqBooking, IReqPayment } from "./booking.interface"

export const createBookingService = (payload: IReqBooking): Promise<any> => {
  return API.post(`/bookings`, {
    body: { ...payload }
  }) as any
}

export const paymentService = (payload: IReqPayment): Promise<any> => {
  return API.post(`/payment`, {
    body: { ...payload }
  }) as any
}
