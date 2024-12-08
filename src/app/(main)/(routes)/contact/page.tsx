import { AiOutlineMessage } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import Accordion from "@mui/material/Accordion"
import AccordionActions from "@mui/material/AccordionActions"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { MdExpandMore } from "react-icons/md"
import Button from "@mui/material/Button"

const data = [
  {
    icon: <AiOutlineMessage size={40} color="gray" />,
    title: "Send message for us by email",
    content: "bookingnow@gmail.com",
    des: "Contact our staff about your order and we will respond as soon as possible."
  },
  { icon: <BsTelephone size={40} color="gray" />, title: "Call us", content: "012345678", des: "In case of emergency, you can call us 24/7 using local or international numbers." },
  {
    icon: <HiOutlineOfficeBuilding size={40} color="gray" />,
    title: "Meet face to face",
    content: "01 Street Vo Van Ngan, Thu Duc",
    des: "In case you cannot contact us, please come to the office to meet face-to-face."
  }
]
const ContactUs = () => {
  return (
    <div className="container mt-[140px] mb-[100px] max-md:mt-[80px]">
      <div className="font-bold text-[30px] max-md:text-[20px]">Customer service</div>
      <div className="grid grid-cols-3 mt-5 gap-[20px] max-md:grid-cols-2 max-sm:grid-cols-1">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 bg-white items-center shadow-md p-[20px]">
            <div>{item.icon}</div>
            <div className="font-bold text-[20px] max-md:text-[16px]">{item.title}</div>
            <div>{item.content}</div>
            <div className="text-[14px]">{item.des}</div>
          </div>
        ))}
      </div>
      <div className="font-bold text-[30px] max-md:text-[20px] mt-4">Frequently asked questions</div>
      <Accordion className="mt-3">
        <AccordionSummary sx={{ fontWeight: 700, fontSize: "16px" }} expandIcon={<MdExpandMore />} aria-controls="panel1-content" id="panel1-header">
          Can I cancel my tour booking?
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: "14px" }}>
          Yes! Cancellation fees are determined by the company and shown in your cancellation policy. You will pay additional fees (if any) to the company.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{ fontWeight: 700, fontSize: "16px" }} expandIcon={<MdExpandMore />} aria-controls="panel1-content" id="panel1-header">
          I can't find my confirmation email. What should i do?
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: "14px" }}>
          Don't forget to check your inbox and spam folder. If you can't find your confirmation, contact us and we'll resend it to you.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{ fontWeight: 700, fontSize: "16px" }} expandIcon={<MdExpandMore />} aria-controls="panel1-content" id="panel1-header">
          If I need to cancel the tour, do I need to pay a fee?
        </AccordionSummary>
        <AccordionDetails sx={{ fontSize: "14px" }}>
          If you book a tour with a free cancellation policy, you won't have to pay a cancellation fee. If your booking is no longer free to cancel or has a non-refundable policy, you
          may be subject to cancellation fees. Cancellation fees are determined by the property. You may be required to pay additional fees to the company.
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default ContactUs
