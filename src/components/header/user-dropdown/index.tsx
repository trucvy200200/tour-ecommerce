import Image from 'next/image'
import { userRoutes } from '@/routes'
import { useState, useRef, useEffect } from 'react'

const UserDropdown = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const catMenu = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideDropdown)
    }, [catMenu])

    const handleClickOutsideDropdown = (e: any) => {
        if (showMenu && !catMenu?.current?.contains(e.target as Node)) {
            setShowMenu(false)
        }
    }

    return (
        <>
            <div onClick={() => setShowMenu(!showMenu)}
                ref={catMenu} className="z-[10] relative flex gap-2 items-center cursor-pointer hover:bg-[rgba(255,255,255,0.2)] p-2 rounded-[4px]">
                <div className="rounded-[999px] w-[30px] h-[30px] relative border border-[#fcba03] border-[1px]">
                    <Image
                        fill
                        src="/banners/banner-home1.jpg"
                        alt="avatar"
                        className='rounded-[999px] object-cover' />
                </div>
                <div className="text-[14px]">Vu Hoang Truc Vy</div>
                {
                    showMenu && userRoutes &&
                    <div className={`rounded-[8px] shadow-[0_0_12px_-3px_rgba(0,0,0,.4)] absolute top-[50px] bg-[white] flex flex-col min-w-[200px] `}>
                        {
                            userRoutes?.map((item: any, index: number) => {
                                return (
                                    <a href={item.url} key={index} className="text-left px-2 py-3 hover:text-[#166699] text-[black] font-normal">{item.title}</a>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default UserDropdown
