"use client"

import Image from 'next/image'
import Lightbox from "react-image-lightbox"
import { useState } from 'react'
import "react-image-lightbox/style.css"
export default function TourDetail() {
    const [selectedImage, setSelectedImage] = useState<{ status: boolean, data: string }>({ status: false, data: "" })

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
                    <div className='h-full w-full relative row-span-1 cursor-pointer' onClick={() => setSelectedImage({ status: true, data: 'https://cdn3.ivivu.com/2015/11/20-hinh-anh-tuyet-dep-ve-Viet-Nam-ivivu-13.jpg' })}>
                        <Image src="/tour-1.jpg" layout='fill' alt="image" className='rounded-br-[8px]' />
                    </div>
                </div>
            </div>
            {selectedImage.status && (
                <div className="lightbox">
                    <Lightbox
                        mainSrc={selectedImage.data}
                        onCloseRequest={() => setSelectedImage({ status: true, data: "" })}
                    />
                </div>
            )}
        </>
    )
}
