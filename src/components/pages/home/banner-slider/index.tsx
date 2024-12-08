"use client"
import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"
import { Navigation, Autoplay } from "swiper/modules"
import Card from "./Card"
import { useTours } from "@/stores/tour"
import { useState } from "react"
import SkeletonSquare from "@/components/common/skeleton/square"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const SwiperStyled = styled(Swiper)`
  margin: 0 auto;
  .swiper-slide {
    position: relative;
    border-radius: 20px;
    cursor: default;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  }
`
const NewsSlider = () => {
  const [storeTours, actionTours] = useTours()
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    setLoading(true)
    actionTours.getTours(`sortBy=cheapest&perPage=10&currentPage=1`)
    setLoading(false)
  }, [])

  return (
    <div>
      {loading || !storeTours.list.length ? (
        <div className="min-h-screen max-md:min-h-[377px] before:bg-[#000] before:bg-opacity-[0.2] before:absolute before:inset-0 relative h-auto overflow-visible">
          <SkeletonSquare />
        </div>
      ) : (
        <div className="swiper-container">
          <SwiperStyled
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2000
            }}
            speed={2000}
            pagination={{
              clickable: true
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }}
            slidesPerView={1}
          >
            {storeTours?.list?.length > 0 &&
              storeTours.list?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card data={item} />
                </SwiperSlide>
              ))}
          </SwiperStyled>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      )}
    </div>
  )
}

export default NewsSlider
