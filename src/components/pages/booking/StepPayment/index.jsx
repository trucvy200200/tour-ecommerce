import { IoChevronForwardSharp } from "react-icons/io5"
import { RiErrorWarningLine } from "react-icons/ri"
import Paypal from "../Paypal"
const StepPayment = ({ setStep }) => {
  return (
    <>
      <div className="max-w-[445px] w-full">
        {/* <div className="text-[20px] font-bold mb-2">Your details</div> */}
        <Paypal />
      </div>
    </>
  )
}

export default StepPayment
