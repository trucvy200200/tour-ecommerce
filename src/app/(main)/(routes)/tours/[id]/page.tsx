"use client"
import Gallery from "@/components/pages/tours/gallery"
import { CiLocationOn } from "react-icons/ci"
import { FaPhone } from "react-icons/fa"
import { MdAccessTime } from "react-icons/md"
import Calendar from '@/components/pages/tours/calendar'
import Ticket from '@/components/pages/tours/tickets'

export default function TourDetail() {

    return (
        <>
            <div className="container mt-[100px] flex flex-col gap-[20px] mb-[5rem]">
                <div className="text-[33px] font-bold leading-[33px] uppercase">Havana Nha Trang Hotel</div>
                <div className="flex items-center gap-2">
                    <CiLocationOn size={23} />
                    <span>Location: Nha Trang, Vietnam</span>
                </div>
                <div>
                    <Gallery />
                </div>
                <div className="grid grid-cols-[60%_40%] max-md:flex-col-reverse max-md:flex">
                    <div className="left-content flex flex-col gap-[20px]">
                        <div className="flex gap-2">
                            <div className="flex items-center gap-2">
                                <FaPhone color="#008234" size={21} />
                                <div className="text-[#008234] font-bold">Call for advanced booking:</div>
                            </div>
                            <a className="cursor-pointer font-bold" href="tel:091231233">091231233</a>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdAccessTime size={23} />
                            <span className="font-bold text-[16px]">Duration: 3 days</span>
                        </div>
                        <div>
                            <div>
                                Với tour du lịch này, bạn sẽ được khám phá các thắng cảnh ở Đà Nẵng về đêm trong lúc du thuyền dọc sông Hàn.
                            </div>
                            <div>
                                Sau khi đến bến cảng, bạn sẽ lên thuyền để bắt đầu hành trình xuôi theo con sông. Xuyên suốt chuyến đi, bạn sẽ được ngắm nhìn quang cảnh thành phố và một số địa danh, bao gồm Cầu Tình yêu và Vòng quay Sun Wheel. Bạn cũng sẽ có cơ hội thưởng thức nhạc sống, biểu diễn ngay trên boong tàu.
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-[20px] font-bold">Regulations</div>
                            <div>Hoạt động trong mọi điều kiện thời tiết, bạn vui lòng mặc trang phục phù hợp.</div>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-[20px] font-bold">Google map</div>
                            <div
                                className="map-detail"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5647851.316911571!2d105.18807706466615!3d12.178145019734666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1706699004644!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                                }}
                            />
                        </div>
                        <div>
                            <div className="text-[20px] font-bold">Plan</div>
                            Nhà hàng Little Ba Na Hills — Sun World Ba Na Hills: 14:00
                        </div>
                    </div>
                    <div className="right-content ml-[30px] max-md:ml-0">
                        <div className="mb-[15px] flex flex-col gap-[15px]">
                            <div className="text-[20px] font-bold">
                                Tickets and prices
                            </div>
                            <span className="text-[14px] font-bold">Search tickets availability by date</span>
                        </div>
                        <Calendar />
                        <Ticket />
                    </div>
                </div>
            </div>
        </>
    )
}
