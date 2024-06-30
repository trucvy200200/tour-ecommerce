"use client"
import { useState } from 'react'
import Fitler from '@/components/pages/tours/list/filter'
import TourCard from '@/components/pages/tours/list/card'

const Tour = () => {

    return (
        <div className="container mt-[140px] grid grid-cols-[35%_65%] gap-[20px]">
            <div>
                <Fitler />
            </div>
            <div>
                <div className='mb-[20px] flex gap-[30px] bg-[#f5f5f5] h-[fit-content] rounded-[999px] justify-center py-1 border-[1px] border-[#f5f5f5]'>
                    <div className="cursor-pointer px-[4rem] rounded-[999px] bg-[#fff] py-1 border-[1px] border-[#000]">Most popular</div>
                    <div className="cursor-pointer px-[4rem]">Lowest price</div>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </div>
            </div>
        </div>
    )
}

export default Tour