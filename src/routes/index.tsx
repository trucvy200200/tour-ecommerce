import { FaRegUser, FaHome } from "react-icons/fa"
import { TiShoppingBag } from "react-icons/ti"
import { CgShoppingBag } from "react-icons/cg"
import { RiContactsBookFill } from "react-icons/ri"

export const navigation = [
  {
    title: "Home",
    url: "/",
    icon: <FaHome size={20} />
  },
  {
    title: "Tours",
    icon: <CgShoppingBag size={20} />,
    submenu: [
      {
        title: "Northern Vietnam",
        url: "/tours?type=Northern+Vietnam"
      },
      {
        title: "Central Vietnam",
        url: "/tours?type=Central+Vietnam"
      },
      {
        title: "Southern Vietnam",
        url: "/tours?type=Southern+Vietnam"
      }
    ]
  },
  {
    title: "Contact",
    url: "/contact",
    icon: <RiContactsBookFill size={20} />
  }
]

export const userRoutes = [
  {
    title: "Manage account",
    url: "/profile",
    icon: <FaRegUser size={16} />
  },
  {
    title: "Bookings & Trips",
    url: "/my-trip",
    icon: <TiShoppingBag size={18} />
  }
]
