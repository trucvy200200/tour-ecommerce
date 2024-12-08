"use client"
import { GrLanguage } from "react-icons/gr"
import { MdPeople } from "react-icons/md"
import { FaAward } from "react-icons/fa"
import { GrUserSettings } from "react-icons/gr"
import * as React from "react"

const Counting = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: 'url("/banners/banner-counting.webp")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        className="min-h-[300px] before:bg-[#000] before:bg-opacity-[0.3] before:absolute before:inset-0 relative flex justify-centers items-center py-3"
      >
        <div className="container z-[1] grid grid-cols-4 max-md:grid-cols-2 relative gap-4">
          <div className="flex flex-col gap-4 items-center max-md:gap-2">
            <GrLanguage color="white" size={60} className="max-md:w-[50px] max-md:h-[50px]" />
            <div className="text-[50px] text-[#47B5FF] max-md:text-[30px]">25+</div>
            <div className="text-[white] text-[20px] max-md:text-[16px]">Amazing Tours</div>
          </div>
          <div className="flex flex-col gap-4 items-center max-md:gap-2">
            <MdPeople color="white" size={60} className="max-md:w-[50px] max-md:h-[50px]" />
            <div className="text-[50px] text-[#47B5FF] max-md:text-[30px]">1500+</div>
            <div className="text-[white] text-[20px] max-md:text-[16px]">Happy Travellers</div>
          </div>
          <div className="flex flex-col gap-4 items-center max-md:gap-2">
            <FaAward color="white" size={60} className="max-md:w-[50px] max-md:h-[50px]" />
            <div className="text-[50px] text-[#47B5FF] max-md:text-[30px]">25+</div>
            <div className="text-[white] text-[20px] max-md:text-[16px]">International Awards</div>
          </div>
          <div className="flex flex-col gap-4 items-center max-md:gap-2">
            <GrUserSettings color="white" size={60} className="max-md:w-[50px] max-md:h-[50px]" />
            <div className="text-[50px] text-[#47B5FF] max-md:text-[30px]">100+</div>
            <div className="text-[white] text-[20px] max-md:text-[16px]">Expert Team</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counting
