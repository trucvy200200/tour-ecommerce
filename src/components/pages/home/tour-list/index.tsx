import Image from 'next/image'

const TourList = () => {
    return (
        <div className='my-[100px]'>
            <div className="text-[33px] mb-[20px] font-bold leading-[33px] text-center uppercase">Tour list</div>
            <div className='flex justify-center gap-[50px] container flex-wrap'>
                <div className="w-[245px] h-[290px] relative card-translateX overflow-hidden">
                    <div className='hidden__img'>
                        <Image src="/tour-1.jpg" layout="fill" alt="image" />
                        <div className='absolute bottom-[10px] text-white left-0 text-[17px] z-[2] bg-[#000] opacity-[0.5] px-2 py-1'>
                            <div className='uppercase line-clamp-1 font-bold'>Nothern VN</div>
                            <div>8 tours</div>
                        </div>
                    </div>
                </div>
                <div className="w-[245px] h-[290px] relative card-translateX overflow-hidden">
                    <div className='hidden__img'>
                        <Image src="/tour-1.jpg" layout="fill" alt="image" />
                        <div className='absolute bottom-[10px] text-white left-0 text-[17px] z-[2] bg-[#000] opacity-[0.5] px-2 py-1'>
                            <div className='uppercase line-clamp-1 font-bold'>Nothern VN</div>
                            <div>8 tours</div>
                        </div>
                    </div>
                </div>
                <div className="w-[245px] h-[290px] relative card-translateX overflow-hidden">
                    <div className='hidden__img'>
                        <Image src="/tour-1.jpg" layout="fill" alt="image" />
                        <div className='absolute bottom-[10px] text-white left-0 text-[17px] z-[2] bg-[#000] opacity-[0.5] px-2 py-1'>
                            <div className='uppercase line-clamp-1 font-bold'>Nothern VN</div>
                            <div>8 tours</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourList