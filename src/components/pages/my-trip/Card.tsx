"use client"

import Image from "next/image"
import { TiTag } from "react-icons/ti"
import { FaRegCalendarAlt } from "react-icons/fa"
import { IoTicketOutline } from "react-icons/io5"
import { useRouter } from "next/navigation"

const Card = () => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-[25%_72%] gap-5 border-[1px] rounded-[8px] overflow-hidden p-4 max-sm:p-2 relative max-sm:grid-cols-1">
      <div className="max-md:flex max-md:justify-center">
        <div className="rounded-[4px] overflow-hidden ">
          <Image src={"/tour-1.jpg"} width={140} height={140} objectFit="cover" alt="image" />
        </div>
      </div>
      <div className="flex gap-1 flex-col">
        <div className="font-bold text-[20px] mb-3">{"Da Lat 2 Days"}</div>
        <div className="text-[14px] flex gap-1 items-center">
          <TiTag color="#FFC107" size={16} />
          Total price: <span className="font-bold">VND {"344.420"}</span>
        </div>
        <div className="text-[14px] flex gap-1 items-center">
          <FaRegCalendarAlt size={16} color="#FFC107" />
          Date: {"20/10/2022 - 21/10/2022"}
        </div>
        <div className="text-[14px] flex gap-1 items-center">
          <IoTicketOutline size={16} color="#FFC107" />
          Ticket type: {"2 x Child & 1 x Adult"}
        </div>
        <div className="flex justify-end max-sm:justify-center mt-2">
          <div
            onClick={() => router.push(`/my-trip/${"1"}`)}
            className="flex gap-2 items-center border-[1px] border-[#006ce4]
             py-2 px-3 rounded-[4px] text-[14px] text-[#006ce4] cursor-pointer hover:bg-[#fafafa]"
          >
            View detail
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
