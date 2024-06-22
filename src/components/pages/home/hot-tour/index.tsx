"use client"
import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import Card from './Card'

import "swiper/css"
import 'swiper/css/navigation'
import "swiper/css/pagination"

const SwiperStyled = styled(Swiper)`
  margin-top: 20px;
  padding-bottom: 70px !important;
  .swiper-slide {
    position: relative;
    border-radius: 20px;
    cursor: default;
    box-shadow:  0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    .img-zoom {
      overflow: hidden;
      object-fit: cover;
      transition: all 4s ease;
    }
    &:hover{
      .img-zoom{
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 991px) {
    margin-top: 10px;
  }
`
export default function HotTour() {

  return (
    <div className="mx-2 my-[30px]">
      <div className="text-[33px] font-bold leading-[33px] text-center uppercase">Hot tours this month</div>
      <div className="flex flex-col">
        <div className="swiper-container">
          <SwiperStyled
            spaceBetween={20}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000
            }
            }
            speed={2000}
            pagination={{
              clickable: true
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            slidesPerView={1}
            breakpoints={{
              1268: {
                slidesPerView: 3
              },
              822: {
                slidesPerView: 3
              },
              630: {
                slidesPerView: 2
              },
              440: {
                slidesPerView: 1
              }
            }}>
            <SwiperSlide> <Card /></SwiperSlide>
            <SwiperSlide> <Card /></SwiperSlide>
            <SwiperSlide> <Card /></SwiperSlide>
            <SwiperSlide> <Card /></SwiperSlide>
          </SwiperStyled>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  )
}