"use client"
import * as React from "react"
import { MdTour } from "react-icons/md"
import { IoChevronDown } from "react-icons/io5"
import { usePathname } from "next/navigation"

const navigation = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "About us",
        url: "/about-us"
    },
    {
        title: "Tour",
        submenu: [
            {
                title: 'Northern Vietnam',
                url: '/tour?region=Northern+Vietnam',
            },
            {
                title: 'Central Vietnam',
                url: '/tour?region=Central+Vietnam',
            },
            {
                title: 'Southern Vietnam',
                url: '/tour?region=Southern+Vietnam',
            }
        ]
    },
    {
        title: "Contact",
        url: "/contact"
    }
]

export default function Header() {
    const pathName = usePathname()
    const [isPageScroll, setIsPageScroll] = React.useState(pathName === "/" ? false : true)
    const [showSubmenu, setShowSubmenu] = React.useState(-1)

    React.useEffect(() => {
        if (pathName === "/") {
            const handleScroll = () => {
                if (window.scrollY >= 100) setIsPageScroll(true)
                else setIsPageScroll(false)
            }
            window.addEventListener('scroll', handleScroll)

            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleShowSubmenu = (index: Number) => {
        if (showSubmenu === -1) return "hidden"
        if (showSubmenu !== -1 && showSubmenu === index) return "block"
        return "hidden"
    }
    return (
        <div className="flex flex-col justify-center font-bold text-white">
            <div className={`flex flex-col items-center  w-full ${isPageScroll ? "bg-[#166699]" : "bg-[rgba(255,255,255,0.1)]"} fixed z-10 top-0`}>
                <div className="container flex justify-between h-[70px] items-center max-w-full max-md:flex-wrap">
                    <a href="/" className="text-[30px] flex items-center gap-2">
                        <MdTour size={32} />
                        <div className="text-[white] font-bold">Booking<span className="text-[black]">Now</span></div>
                    </a>
                    <div className="flex gap-[35px] self-stretch my-auto text-base tracking-normal leading-6 text-center max-lg:gap-[20px] max-md:hidden">
                        {
                            navigation.map((item: any, index: number) => {
                                return (
                                    <div key={index} className={`${pathName === item?.url && 'bg-[rgba(255,255,255,0.4)]'} relative hover:bg-[rgba(255,255,255,0.4)] px-2`} onMouseOver={() => setShowSubmenu(index)} onMouseLeave={() => setShowSubmenu(-1)}>
                                        <div className="uppercase cursor-pointer h-[70px] flex flex-col justify-center">
                                            <a href={item.url} className="flex items-center gap-1">
                                                {item.title} {item?.submenu && <IoChevronDown />}
                                            </a>
                                        </div>
                                        {
                                            item?.submenu &&
                                            <div className={`shadow-[0_0_12px_-3px_rgba(0,0,0,.4)] absolute top-[70px] left-0 bg-[rgba(255,255,255,0.2)] flex flex-col min-w-[200px] ${handleShowSubmenu(index)}`}>
                                                {
                                                    item?.submenu.map((item: any, index: number) => {
                                                        return (
                                                            <a href={item.url} key={index} className="text-left px-2 py-3 hover:bg-[rgba(255,255,255,0.4)] hover:text-[black] font-normal">{item.title}</a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className="flex gap-3.5 items-center self-stretch my-auto">

                    </div>
                </div>
            </div>
        </div>
    )
}
