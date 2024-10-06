"use client"
import { useRouter } from "next/navigation"
import { FaCircleXmark } from "react-icons/fa6"
import { FaRegCalendarAlt } from "react-icons/fa"
import { CiEdit } from "react-icons/ci"

const MyTripDetail = () => {
  const router = useRouter()

  return (
    <div className="container mt-[160px] mb-6">
      <div className="font-bold text-[25px] mb-5">Check your information</div>
      <div className="grid grid-cols-[68%_30%] gap-4">
        <div className="shadow-[rgba(0,0,0,0.12)_0px_0px_8px] rounded-[3px] overflow-hidden py-[20px] px-[10px]">
          <div className="mb-3 underline text-[#006ce4] text-[20px] font-bold cursor-pointer" onClick={() => router.push("/tours/1")}>
            Da Lat 2 Days
          </div>
          <div className="flex flex-col gap-[15px] border-b-[2px] pb-[20px]">
            <div className="flex justify-between">
              <div className="font-bold">Confirmation code</div>
              <div>2A1231</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">Ticket types</div>
              <div>2 x Child & 1 x Adult</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">Date</div>
              <div>20/10/2022 - 21/10/2022</div>
            </div>
            <div className="flex justify-between">
              <div className="font-bold">Duration</div>
              <div>1 day</div>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div>1 x Adult</div>
            <div>VND 550.000đ</div>
          </div>
          <div className="flex justify-between mt-3 border-b-[2px] pb-[20px]">
            <div>2 x Children</div>
            <div>VND 500.000đ</div>
          </div>
          <div className="flex justify-between mt-3 border-b-[2px] pb-[20px]">
            <div className="text-[#006ce4] font-bold text-[20px]">Total Price</div>
            <div className="text-[#006ce4] font-bold text-[20px]">VND 1.050.000</div>
          </div>
          <div className="px-2 bg-[#006ce4] bg-opacity-[0.1] pt-3">
            <div className="text-[16px] font-bold mb-3">Payment detail</div>
            <div className="flex justify-between mt-3">
              <div className="text-[16px]">Method</div>
              <div className="text-[16px]">VN Pay</div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="text-[16px]">Code</div>
              <div className="text-[16px]">123456</div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="text-[16px]">Time</div>
              <div className="text-[16px]">20:10 19/10/2022</div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="text-[16px]">Payer name</div>
              <div className="text-[16px]">NGUYEN THI LINH</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[20px] font-bold mb-3">Is all the information accurate?</div>
          <div className="text-[14px]">You can always view and change your tour settings online - no need to re-register</div>
          <div className="flex items-center gap-2 mt-3">
            <FaCircleXmark size={16} />
            <div className="cursor-pointer text-[#006ce4] underline">Cancel this order</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <FaRegCalendarAlt size={16} />
            <div className="cursor-pointer text-[#006ce4] underline">Update date</div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <CiEdit size={16} />
            <div className="cursor-pointer text-[#006ce4] underline">Update ticket information</div>
          </div>
          <div className="text-[14px] mt-4">
            See more about <span className="text-[#006ce4] underline cursor-pointer">Cancellation Policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyTripDetail
