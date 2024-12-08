import { navigation } from "@/routes"
import { MdTour } from "react-icons/md"
import { useState } from "react"
import cn from "clsx"

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  const handleExpand = () => {
    setOpen(!open)
  }

  return (
    <>
      <a href="/" className="text-[30px] flex items-center gap-2">
        <MdTour size={32} color="black" />
        <div className="font-bold text-[#166699]">BookingNow</div>
      </a>
      <ul className="space-y-2 font-medium mt-4">
        {navigation.map((item, index) => (
          <li key={index}>
            {!item?.submenu ? (
              <a href={item.url || "#"} className="text-black hover:text-white flex items-center p-2 text-gray-900 rounded-lg hover:bg-[#166699] group">
                {item.icon}
                <span className="ms-3">{item.title}</span>
              </a>
            ) : (
              <>
                <button
                  onClick={handleExpand}
                  type="button"
                  className="flex items-center w-full p-2 text-base text-black hover:text-white transition duration-75 rounded-lg group hover:bg-[#166699]"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  {item.icon}
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{item?.title}</span>
                  <svg color="black" className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <ul id="dropdown-example" className={cn("py-2 space-y-2", open ? "block" : "hidden")}>
                  {item?.submenu?.map((item, index) => (
                    <li key={index}>
                      <a href={item.url || "#"} className="flex items-center w-full p-2 text-black hover:text-white  transition duration-75 rounded-lg pl-7 group hover:bg-[#166699]">
                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{item?.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default MobileMenu
