import { CiSearch } from "react-icons/ci"
import { IoRemove, IoReturnUpBackSharp } from "react-icons/io5"
import { useEffect, useState } from "react"
import { VscSettings } from "react-icons/vsc"
import { useMediaQuery } from "@mui/material"
import { styled, useTheme } from "@mui/material/styles"

const locationOption = [
  {
    label: "Northern Vietnam",
    value: "Northern+Vietnam"
  },
  {
    label: "Central Vietnam",
    value: "Central+Vietnam"
  },
  {
    label: "Southern Vietnam",
    value: "Southern+Vietnam"
  }
]

const priceOption = [
  {
    labelFrom: "0",
    labelTo: "545,554",
    fromValue: "0",
    toValue: "545,554"
  },
  {
    labelFrom: "545,554",
    labelTo: "1,091,108",
    fromValue: "545,554",
    toValue: "1,091,108"
  },
  {
    labelFrom: "1,091,108",
    labelTo: "2,045,828",
    fromValue: "1,091,108",
    toValue: " 2,045,828"
  },
  {
    labelFrom: "2,045,828",
    fromValue: "2,045,828"
  }
]

const FilterComponent = () => {
  return (
    <div className="mt-4 border-[1px] py-[20px] px-[20px] rounded-[8px]">
      <div className="flex justify-between border-b-[1px] pb-[20px] items-center">
        <div className="text-[16px] font-bold">Filter by:</div>
        <div className="text-[14px] font-bold text-[#006ce4] cursor-pointer">Clear</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-[500] text-[14px] mt-3">Location</div>
        {locationOption.map((item, index) => (
          <div key={index} className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" value={item.value} className="h-[18px] w-[18px]" onChange={(e) => handleSelectLocation(e.target)} />
            <div className="text-[14px]">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-[500] text-[14px] mt-3">Price</div>
        {priceOption.map((item, index) => (
          <div key={index} className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="h-[18px] w-[18px]" />
            {item.fromValue && item.toValue ? (
              <div className="text-[14px]">
                VND {item.fromValue} - VND {item.toValue}
              </div>
            ) : (
              <div className="text-[14px]">VND {item.labelFrom}+ </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const Filter = () => {
  const [location, setLocation] = useState("")
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down("md"))
  const [showFilter, setShowFilter] = useState(mdDown ? false : true)
  const handleSelectLocation = (e: HTMLInputElement) => {
    if (e.checked) {
      setLocation(e.value)
    }
  }

  return (
    <div>
      <div className="bg-[#ffb700] rounded-[8px] p-[4px]">
        <div className="relative">
          <input
            className="font-normal border-b-[2px] outline-none text-[#333] rounded-t-[8px] 
                                text-[18px] px-[50px] py-[14px] px-[15px] w-full"
            placeholder="From..."
          />
          <CiSearch className="absolute top-[15px] left-[10px]" size={28} color="#000" />
          <IoRemove className="absolute top-[15px] right-[10px] cursor-pointer" size={28} />
        </div>
        <div className="relative">
          <input
            className="font-normal border-none outline-none text-[#333] rounded-b-[8px] 
                                text-[18px] px-[50px] py-[14px] px-[15px] w-full"
            placeholder="To..."
          />
          <IoReturnUpBackSharp className="absolute top-[15px] left-[10px] rotate-[180deg]" size={28} color="#000" />
          <IoRemove className="absolute top-[15px] right-[10px] cursor-pointer" size={28} />
        </div>
        <button className="w-full py-3 text-[white] bg-[#006ce4] rounded-[8px] mt-2 font-bold hover:bg-[#004b9a]">Search</button>
      </div>
      {mdDown ? (
        <>
          <div onClick={() => setShowFilter(!showFilter)} className="mt-4 rounded-full px-4 py-1 bg-[rgba(240,240,240)] w-[fit-content] text-center">
            <VscSettings size={20} />
          </div>
          {showFilter && <FilterComponent />}
        </>
      ) : (
        <FilterComponent />
      )}
    </div>
  )
}

export default Filter
