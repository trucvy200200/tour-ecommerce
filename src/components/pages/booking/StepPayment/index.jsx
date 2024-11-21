import { IoChevronForwardSharp } from "react-icons/io5"
import { RiErrorWarningLine } from "react-icons/ri"
import Paypal from "../Paypal"
import { useBooking } from "@/stores/booking"
import { naiveRound } from "@/helpers/base.helper"
import { useTours } from "@/stores/tour"

const StepPayment = () => {
  const [store] = useBooking()
  const [storeTour] = useTours()

  return (
    <>
      <div className="max-w-[445px] w-full">
        {/* <div className="text-[20px] font-bold mb-2">Your details</div> */}
        <Paypal amount={storeTour?.detail?.isApprove ? naiveRound(store.detail?.totalPrice, 0) : naiveRound(store.detail?.totalPrice * 0.5, 0)} />
        <div className="text-red-500 text-[14px]">
          Deposit 50% to confirm your booking. We will send you an email to announce the remaining 50% 1 week before the trip. Make sure to pay all fee before the trip starts.
        </div>
      </div>
    </>
  )
}

export default StepPayment
