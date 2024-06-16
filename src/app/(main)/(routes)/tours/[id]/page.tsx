"use client"

import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox"
import { useState } from 'react'
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css";
export default function TourDetail() {
    const [selectedImage, setSelectedImage] = useState(false)

    return (
        <>
            <div className="container mt-[200px]">
                <div className="grid grid-rows-[repeat(4,1fr)] grid-cols-[minmax(0,3.3fr)_minmax(0,1.1fr)_minmax(0,1fr)] h-[470px] gap-[10px_8px] rounded-[8px]">
                    <div className='h-full w-full relative row-span-4 cursor-pointer' onClick={selectedImage ? () => setSelectedImage(false) : () => setSelectedImage(true)}>
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
                    <div className='h-full w-full relative row-span-1 cursor-pointer' >
                        <Image src="/tour-1.jpg" layout='fill' alt="image" className='rounded-br-[8px]' />
                    </div>
                </div>
            </div>
            <div className="lightbox">
                <Lightbox
                    open={selectedImage}
                    slides={[{ src: "/tour-1.jpg" }]}
                    close={() => setSelectedImage(false)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
            </div>
        </>
    )
}
