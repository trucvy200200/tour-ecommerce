"use client"

import { Autocomplete, TextField } from "@mui/material"
import { styled, alpha } from "@mui/material/styles"
import { useState } from "react"
import Flatpickr from "react-flatpickr"
import { VscTriangleDown } from "react-icons/vsc"

import "flatpickr/dist/flatpickr.css"

const SelectBox = styled(Autocomplete)(({ theme, error }) => ({
  "label + &": {
    marginTop: theme.spacing(6)
  },
  width: "100%",
  borderRadius: 8,
  position: "relative",
  border: "1px solid",
  fontSize: 15,
  backgroundColor: "white",
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
const Flights = () => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")

  return (
    <>
      <div
        style={{ backgroundImage: 'url("/banners/banner-flights.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
        className="max-h-screen max-md:min-h-[377px] before:bg-[#000] before:bg-opacity-[0.2] before:absolute before:inset-0 relative h-auto overflow-visible"
      >
        <div className="container relative z-[1] min-h-[600px] max-md:min-h-[377px] flex items-center">
          <div className="bg-white w-full rounded-[8px] p-[20px]">
            <div className="flex w-full max-md:flex-col gap-2">
              <div className="flex-1">
                <div className="text-[20px]">From</div>
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
              <div className="flex-1">
                <div className="text-[20px]">To</div>
                <SelectBox
                  onChange={(e: any) => setTo(e.target.value)}
                  noOptionsText={"No data yet"}
                  className={`[&>.MuiFormControl-root>.MuiInputBase-root>fieldset]:!border-none`}
                  value={places?.find((c) => c.value === to)}
                  sx={{ mt: 1 }}
                  options={places}
                  renderInput={(params) => <TextField {...params} placeholder={"From"} />}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="font-[500] text-[18px]">Date</div>
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
            </div>
            <div className="w-full flex-1">
              <button className="w-full py-4 text-white bg-[#2A60B9]">Search for flights</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flights