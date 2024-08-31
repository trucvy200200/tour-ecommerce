import { IoChevronForwardSharp } from "react-icons/io5"
import { RiErrorWarningLine } from "react-icons/ri"

const StepDetail = ({ setStep }) => {

    return (
        <>
            <div className="max-w-[445px] w-full">
                <div className="text-[20px] font-bold mb-2">Your details</div>
                <div className="flex justify-between gap-3">
                    <div className="w-full">
                        <div className="flex items-center gap-2">
                            <div className="text-[14px] font-[500]">First name</div> <p className="text-[#D4111E]">*</p>
                        </div>
                        <input className="w-full border-[1px] border-[#000] px-3 py-1 outline-none rounded-[4px] text-[14px] h-[36px]
                        focus:border-[#0057b8] focus:border-[2px]" />
                    </div>
                    <div className="w-full">
                        <div className="flex items-center gap-2">
                            <div className="text-[14px] font-[500]">Last name</div> <p className="text-[#D4111E]">*</p>
                        </div>
                        <input className="w-full border-[1px] border-[#1a1a1a] px-3 py-1 outline-none rounded-[4px] text-[14px] h-[36px]
                        focus:border-[#0057b8] focus:border-[2px]" />
                    </div>
                </div>
                <div className="mt-2">
                    <div className="flex items-center gap-2">
                        <div className="text-[14px] font-[500]">Email address</div> <p className="text-[#D4111E]">*</p>
                    </div>
                    <input className="w-full border-[1px] border-[#1a1a1a] px-3 py-1 outline-none rounded-[4px] text-[14px] h-[36px]
                        focus:border-[#0057b8] focus:border-[2px]" />
                    <div className="text-[14px] mt-1">We'll send your confirmation details to <span className="font-bold">toan9400@gmail.com</span></div>
                </div>
                <div className="mt-2">
                    <div className="flex items-center gap-2">
                        <div className="text-[14px] font-[500]">Telephone (mobile number preferred)</div> <p className="text-[#D4111E]">*</p>
                    </div>
                    <input className="w-full border-[1px] border-[#1a1a1a] px-3 py-1 outline-none rounded-[4px] text-[14px] h-[36px]
                        focus:border-[#0057b8] focus:border-[2px]" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-[20px] font-bold mt-3 mb-2">Additional details</div>
                    <RiErrorWarningLine size={23} />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <div className="text-[14px] font-[500]">Do you have special requirements?</div>
                    </div>
                    <input className="w-full border-[1px] border-[#1a1a1a] px-3 py-1 outline-none rounded-[4px] text-[14px] h-[36px]
                        focus:border-[#0057b8] focus:border-[2px]" />
                </div>
                <div className="text-[16px] font-bold mt-3">Adult 1</div>
                <div className="flex items-center gap-2">
                    <div className="text-[14px] font-[500]">First name</div> <p className="text-[#D4111E]">*</p>
                </div>
                <input className="mb-2 w-full border-[1px] border-[#000] px-3 py-1 outline-none rounded-[4px] text-[14px] h-[36px]
                        focus:border-[#0057b8] focus:border-[2px]" />
                <div className="flex items-center gap-2">
                    <div className="text-[14px] font-[500]">Last name</div> <p className="text-[#D4111E]">*</p>
                </div>
                <input className="w-full border-[1px] border-[#1a1a1a] px-3 py-1 outline-none rounded-[4px] text-[14px] h-[36px]
                        focus:border-[#0057b8] focus:border-[2px]" />
                <div className="flex justify-center items-center text-[14px] gap-4 mt-4 mb-[30px] py-2 w-full font-bold rounded-[4px] bg-[#166699] text-white text-center cursor-pointer"
                    onClick={() => setStep(2)}>
                    Payment details
                    <IoChevronForwardSharp size={20} />
                </div>
            </div>
        </>
    )
}

export default StepDetail