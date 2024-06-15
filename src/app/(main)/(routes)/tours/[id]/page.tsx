"use client"
import Image from 'next/image'
import Lightbox from "rhino-react-image-lightbox-rotate"
import { useState } from 'react'

export default function TourDetail() {
    const [selectedImage, setSelectedImage] = useState<boolean>(false)

    return (
        <>
            <div className="container mt-[200px]">
                <div className="grid grid-rows-[repeat(4,1fr)] grid-cols-[minmax(0,3.3fr)_minmax(0,1.1fr)_minmax(0,1fr)] h-[470px] gap-[10px_8px] rounded-[8px]">
                    <div className='h-full w-full relative row-span-4 cursor-pointer'>
                        <Image src="/tour-1.jpg" layout='fill' alt="image" className='rounded-l-[8px]' />
                    </div>
                    <div className='h-full w-full relative row-span-2 cursor-pointer'>
                        <Image src="/tour-1.jpg" layout='fill' alt="image" />
                    </div>
                    <div className='h-full w-full relative row-span-1 cursor-pointer'>
                        <Image src="/tour-1.jpg" layout='fill' alt="image" className='rounded-tr-[8px]' />
                    </div>
                    <div className='h-full w-full relative row-span-1 cursor-pointer'>
                        <Image src="/tour-1.jpg" layout='fill' alt="image" />
                    </div>
                    <div className='h-full w-full relative row-span-2 cursor-pointer'>
                        <Image src="/tour-1.jpg" layout='fill' alt="image" />
                    </div>
                    <div className='h-full w-full relative row-span-1 cursor-pointer'>
                        <Image src="/tour-1.jpg" layout='fill' alt="image" />
                    </div>
                    <div className='h-full w-full relative row-span-1 cursor-pointer' onClick={() => setSelectedImage(true)}>
                        <Image src="/tour-1.jpg" layout='fill' alt="image" className='rounded-br-[8px]' />
                    </div>
                </div>
            </div>
            {selectedImage === true && (
                <div className="lightbox">
                    <Lightbox
                        mainSrc={"/tour-1.jpg"}
                        onCloseRequest={() => setSelectedImage(false)}
                        nextSrc={"/tour-1.jpg"}
                        prevSrc={"/tour-1.jpg"}
                    />
                </div>
            )}
        </>
    )
}
