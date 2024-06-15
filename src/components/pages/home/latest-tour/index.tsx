import Image from 'next/image'

const LatestTour = () => {
    return (
        <div className='mt-[100px]'>
            <div className="text-[33px] mb-[20px] font-bold leading-[33px] text-center uppercase">Latest tours</div>
            <div className='flex max-md:flex-col'>
                <div className='flex-1 relative card-zoom overflow-hidden'>
                    <Image src="/tour-1.jpg" width={1000} height={200} alt="image" />
                    <div className='flex items-center gap-1 justify-center absolute bottom-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] text-white text-[14px]'>
                        <div className='mx-[10px] flex flex-col gap-[10px] text-center items-center my-[20px]'>
                            <div className='text-[20px] font-bold leading-[32px] line-clamp-2 card-title uppercase'>
                                Địa đạo củ chi
                            </div>
                            <div className='line-clamp-3 text-[18px] leading-[24px] tracking-[0.08px]'>
                                Price: <span className='font-bold'>2.000.000VND</span>
                            </div>
                            <div className="cursor-pointer w-[136px] h-[36px] bg-[transparent] rounded-[999px] flex items-center justify-center border-[2px] border-[white] text-[white] uppercase text-[17px]">Book Now</div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='grid grid-cols-2'>
                        {[0, 1, 2, 3].map(() =>
                            <div className='relative card-zoom overflow-hidden'>
                                <Image src="/tour-2.jpg" width={1000} height={200} alt="image" />
                                <div className='flex items-center gap-1 justify-center absolute left-0 bottom-0 w-full h-full bg-[rgba(0,0,0,0.3)] text-white text-[14px]'>
                                    <div className='mx-[10px] flex flex-col gap-[10px] text-center items-center my-[20px]'>
                                        <div className='text-[20px] font-bold leading-[32px] line-clamp-2 card-title uppercase'>
                                            Địa đạo củ chi
                                        </div>
                                        <div className='line-clamp-3 text-[18px] leading-[24px] tracking-[0.08px]'>
                                            Price: <span className='font-bold'>2.000.000VND</span>
                                        </div>
                                        <div className="cursor-pointer w-[136px] h-[36px] bg-[transparent] rounded-[999px] flex items-center justify-center border-[2px] border-[white] text-[white] uppercase text-[17px]">Book Now</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestTour