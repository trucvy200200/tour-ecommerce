import React, { memo } from "react"
import { BASE_CONSTANTS } from "@/constants/base.constant"

const PaymentPolicy = () => {
  const content: any = {
    title: {
      vi: "ĐIỀU KIỆN GIAO DỊCH CHUNG CHO HOẠT ĐỘNG MUA BÁN HÀNG HÓA, CUNG ỨNG CÁC DỊCH VỤ TRÊN WEBSITE",
      en: "GENERAL TRADING CONDITIONS FOR BUYING AND SELLING GOODS AND PROVIDING SERVICES ON THE WEBSITE"
    },
    step: { vi: "Bước", en: "Step" }
  }

  return (
    <div className="container w-full h-auto flex-col justify-start items-start gap-5 inline-flex pt-[20px] mt-[140px] mb-[20px]">
      <div className="Frame5276 w-full h-auto relative">
        <div className="text-[40px] font-bold mb-[20px] leading-[54px]">{content.title["en"]}</div>
        <>
          <div className="text-xl leading-8 text-black mt-[10px] flex flex-col gap-4">
            <div className="font-bold">1. Scope of application and Instructions</div>
            <div>Terms and Conditions apply to customers when ordering products on BookingNow e-commerce platform</div>
            <div>- All individuals have full civil capacity, are from 15 years old and have assets to make purchases, or have the supervision of a parent or legal guardian.</div>
            <div>
              - It is strictly prohibited to use any content of the website for commercial purposes or on behalf of any third party without the written permission of BookingNow Trading
              Platform.
            </div>
            <div>
              - When registering an account, you must provide authentic information about yourself and update it if there are any changes, and are responsible for keeping your account &
              login password confidential. In case your account is accessed illegally, you must notify us for processing. BookingNow E-Commerce Platform is not responsible for any
              damage or loss that occurs due to your failure to comply with regulations.
            </div>
          </div>
          <div className="text-xl leading-8 text-black mt-[10px] flex flex-col gap-4">
            <div className="font-bold">2. Contract formations</div>
            <div>
              {
                "- Any information about products posted on BookingNow E-commerce Platform in any case cannot be understood as an offer to enter into a contract from BookingNow E-Commerce Platform to the Customer. The contractual relationship is only formed and takes effect from the moment the Customer orders and the order is accepted in one of the following two forms: notification sent to the email provided by the Customer or a message sent from the BookingNow Trading Platform. to the Customer's phone number to confirm the order has been successfully processed."
              }
              <br />
              {
                "- When you want to cancel an order (if any), you must follow the regulations in the Return Policy posted on the BookingNow E-Commerce Platform. Orders may be partially or completely canceled upon confirmation by the Customer with the Customer Service Department. BookingNow E-Commerce Platform has the right to cancel Customer's Order in some cases, as specified in the Delivery Policy. At that time, the amount the Customer has paid corresponding to the value of the canceled order will be refunded to you according to regulations."
              }
            </div>
          </div>
          <div className="text-xl leading-8 text-black mt-[10px] flex flex-col gap-4">
            <div className="font-bold">3. order and confirm order</div>
            <div>
              - When you order at the BookingNow E-Commerce Platform, we will receive and immediately send you the order code. After that, the customer needs to perform an additional
              step of Order Confirmation. BookingNow only confirms orders when the order request meets the order fulfillment criteria at BookingNow E-Commerce Platform.
              <br />- In order for your order to be confirmed quickly, please provide complete and accurate information related to delivery and receipt of goods, or the terms and
              conditions of the promotion program (if any) that you have provided. guests participate.
            </div>
          </div>
          <div className="text-xl leading-8 text-black mt-[10px] flex flex-col gap-4">
            <div className="font-bold">4. Order value and payment method</div>
            <div>
              {
                "- The Customer pays the value of the Order in accordance with the provisions of the Payment Policy. When pressing (click) on the 'Pay' button to proceed with the payment of the Order, it means that the Customer confirms that he has carefully reviewed the order information and agrees to the Terms and Conditions applicable to the transaction. purchase that product."
              }
              <br />- BookingNow e-commerce platform provides payment methods for customers to choose from: Cash payment, Bank transfer payment
            </div>
          </div>
          <div className="text-xl leading-8 text-black mt-[10px] flex flex-col gap-4">
            <div className="font-bold">5. Regulations on information security</div>
            <div>
              - BookingNow e-commerce platform always upholds and values ​​information security and uses the best measures to protect all customer information. Information during the
              payment process will be encrypted to ensure safety.
              <br />
              - You may not use any program, tool or form to interfere with the system to change the data structure. The website also strictly prohibits any act of distributing,
              propagating or promoting any activity aimed at interfering, sabotaging or infiltrating system data. Violating individuals or organizations will have their rights revoked
              and be prosecuted before the law if necessary.
              <br />
              - Customer information security regulations will be implemented according to the Customer Personal Information Protection clause in the Operating Regulations posted on the
              BookingNow E-Commerce Platform.
              <br />- Regulations on security of payment information for Customers are implemented according to the terms of the Payment Security Policy.
            </div>
          </div>
          <div className="text-xl leading-8 text-black mt-[10px] flex flex-col gap-4">
            <div className="font-bold">6. Complaint handling</div>
            <div>
              - When you have any questions or complaints, including but not limited to the quality of goods/services, product delivery, attitude of delivery staff, product
              exchange/return, etc. Customers can contact the Customer Service Department at hotline 1800.1010 or send feedback to email: {BASE_CONSTANTS.CSKH_EMAIL}
              <br />
              - Customers can complain right on the purchase order details
              <br />- Customers can also cancel a complaint request directly on the order that has been complained about
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default memo(PaymentPolicy)
