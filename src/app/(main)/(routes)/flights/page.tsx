"use client"

import { Autocomplete, TextField, Grid } from "@mui/material"
import { styled, alpha } from "@mui/material/styles"
import { useState } from "react"
import Flatpickr from "react-flatpickr"
import { VscTriangleDown } from "react-icons/vsc"
import { LiaExchangeAltSolid } from "react-icons/lia"

import "flatpickr/dist/flatpickr.css"
import { useRouter } from "next/navigation"

const SelectBox = styled(Autocomplete)(({ theme, error }) => ({
  width: "100%",
  borderRadius: 8,
  position: "relative",
  border: "1px solid",
  fontSize: 15,
  backgroundColor: "white",
  marginTop: "0 !important",
  transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),
  borderColor: error ? theme.palette.error.main : "black",
  "&.Mui-focused": {
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: error ? theme.palette.error.main : theme.palette.primary.main
  },
  ".MuiInputBase-input": {
    height: "10px"
  }
}))

const places = [
  {
    label: "Ho Chi Minh",
    value: "HCM"
  },
  {
    label: "Ha Noi",
    value: "HN"
  }
]

const classOptions = [
  {
    label: "Economy",
    value: "economy"
  },
  {
    label: "Business",
    value: "business"
  }
]

const Flights = () => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")
  const [classOption, setClassOption] = useState("")
  const router = useRouter()

  return (
    <>
      <div
        style={{ backgroundImage: 'url("/banners/banner-flights.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
        className="max-h-screen max-md:min-h-[377px] before:bg-[#000] before:bg-opacity-[0.2] before:absolute before:inset-0 relative h-auto overflow-visible"
      >
        <div className="container relative z-[1] min-h-[600px] max-md:min-h-[577px] flex items-center">
          <div className="bg-white w-full rounded-[8px] p-[20px] grid grid-cols-[70%_30%] max-md:grid-cols-1 mt-5">
            <div className="">
              <div className="flex w-full gap-4 mb-8 max-md:mb-5 max-md:flex-col items-center">
                <div className="flex-1">
                  <div className="text-[16px]">From</div>
                  <SelectBox
                    noOptionsText={"No data yet"}
                    className={`[&>.MuiFormControl-root>.MuiInputBase-root>fieldset]:!border-none`}
                    value={places?.find((c) => c.value === from)}
                    sx={{ mt: 1 }}
                    options={places}
                    onChange={(e: any) => setFrom(e.target.value)}
                    renderInput={(params) => <TextField {...params} placeholder={"From"} />}
                  />
                </div>
                <LiaExchangeAltSolid className="mt-[20px]" size={20} />
                <div className="flex-1">
                  <div className="text-[16px]">To</div>
                  <SelectBox
                    onChange={(e: any) => setTo(e.target.value)}
                    noOptionsText={"No data yet"}
                    className={`[&>.MuiFormControl-root>.MuiInputBase-root>fieldset]:!border-none`}
                    value={places?.find((c) => c.value === to)}
                    sx={{ mt: 1 }}
                    options={places}
                    renderInput={(params) => <TextField {...params} placeholder={"To"} />}
                  />
                </div>
              </div>
              <div className="flex gap-[50px] max-md:flex-col">
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-4">
                    <div className="text-[16px] mb-0">Date</div>
                  </div>
                  <Flatpickr
                    name="date"
                    options={{
                      disableMobile: true,
                      dateFormat: "d/m/Y",
                      minDate: "today"
                    }}
                    value={date || ""}
                    onChange={(_: any, d: string) => {
                      setDate(d)
                    }}
                    id="release"
                    className={"w-full relative focus:outline-none cursor-pointer bg-transparent text-[16px] border border-[#000000] rounded-[10px] p-[10px]"}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[16px] flex flex-col">Class</div>
                  <SelectBox
                    onChange={(e: any) => setClassOption(e.target.value)}
                    noOptionsText={"No data yet"}
                    className={`[&>.MuiFormControl-root>.MuiInputBase-root>fieldset]:!border-none`}
                    value={classOptions?.find((c) => c.value === classOption)}
                    sx={{ mt: 1 }}
                    options={classOptions}
                    renderInput={(params) => <TextField {...params} placeholder={"Select class"} />}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex-1 flex justify-start flex-col mt-[21px] ml-[10px]">
              <button onClick={() => router.push("flights/filter")} className="py-3 bg-[#41d3ff] px-4 rounded-[8px] font-bold text-black h-[fit-content]">
                Search for flights
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flights
