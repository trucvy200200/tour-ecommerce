import Image from 'next/image'
import { CiTimer } from "react-icons/ci"
import { IoStar, IoChevronForwardSharp } from "react-icons/io5"

const Card = () => {
    return (
        <div className="grid grid-cols-[30%_70%] border-[1px] rounded-[8px] overflow-hidden p-4 relative">
            <div className='w-[174px] h-[174px] relative rounded-[4px] overflow-hidden'>
                <Image src="/img-card-sample.jpg" fill objectFit='cover' alt="image" />
            </div>
            <div className='flex gap-1 flex-col'>
                <div className='text-[14px]'>Region</div>
                <div className='capitalize font-bold text-[20px]'>Tour name</div>
                <div className='line-clamp-1 text-[14px]'>Short description</div>
                <div className='text-[14px] flex gap-1 items-center'>
                    <CiTimer size={16} />
                    Duration: 45 minutes
                </div>
                <div className='text-[14px] flex gap-1 items-center font-bold'>
                    <IoStar size={16} color='#FFC107' />
                    4.4 <span className='font-normal'>(244 reviews)</span>
                </div>
                <div className='absolute bottom-[20px] right-[20px]'>
                    <div className='text-right'>
                        <div className='text-[12px] mb-1'>
                            From <span className='font-bold text-[16px]'>300.000VND</span>
                        </div>
                        <div className='flex gap-2 items-center border-[1px] border-[#006ce4]
                 py-2 px-3 rounded-[4px] text-[14px] text-[#006ce4] cursor-pointer hover:bg-[#fafafa]'>
                            See availability
                            <IoChevronForwardSharp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card