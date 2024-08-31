'use client'
import { useRouter } from "next/navigation"
import { IoChevronBackSharp } from "react-icons/io5"
import { useState } from "react"
import DetailStep from '@/components/pages/booking/StepDetail'
import PaymentStep from '@/components/pages/booking/StepPayment'

const Booking = () => {
    const router = useRouter()
    const [step, setStep] = useState(1)

    return (
        <div className="container mt-[140px]">
            <div className="flex gap-2 items-center cursor-pointer">
                <IoChevronBackSharp size={23} />
                <div className="text-[14px] hover:underline">{step === 1 ? "Ticket options" : "Your details"}</div>
            </div>
            <div className="text-[14px] mt-5">Step {step} of 2</div>
            <div className="grid grid-cols-[65%_35%] mt-2">
                {
                    step === 1 ? <DetailStep setStep={setStep} /> : <PaymentStep setStep={setStep} />
                }
                <div>
                    <div className="grid grid-cols-[30%_70%] border-b-[1px] border-b-[gray] w-full h-[fit-content] pb-5">
                        <div className="w-[100px] h-[100px] rounded-[8px] object-cover overflow-hidden">
                            <img src="/tour-1.jpg" alt="img" />
                        </div>
                        <div>
                            <div className="text-[16px] font-bold line-clamp-2 h-[50px]">Hoi An Eco Cooking Class(Local market, Basket Boat Ride,Crab Fishing & Cooking)</div>
                            <div className="text-[13px]">Tue, 13 Aug 08:30</div>
                        </div>
                    </div>
                    <div className="mt-4 font-bold text-[20px]">3 x Standard ticket</div>
                    <div className="flex justify-between items-center mt-2  ">
                        <div>2 x Adult (age 7-82)</div>
                        <div>US$58.42</div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div>2 x Child (age 5-6)</div>
                        <div>US$29.21</div>
                    </div>
                    <div className="font-bold flex items-center justify-between mt-3 text-[16px]">
                        <div>Total price</div>
                        <div>US$29.21</div>
                    </div>
                    <div>Includes taxes and charges</div>
                </div>
            </div>
        </div>
    )
}

export default Booking