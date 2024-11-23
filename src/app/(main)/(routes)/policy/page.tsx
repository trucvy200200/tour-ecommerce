import React, { memo } from "react"
import { useLanguage } from "hooks/useLanguage"
import { LANGUAGES } from "constants/base.constant"
import Link from "next/link"

const PolicyGeneral = () => {
  const { locale } = useLanguage()

  const content: any = {
    title: { vi: "Chính sách", en: "Policies" }
  }

  return (
    <div className="container w-full h-auto flex-col justify-start items-start gap-5 inline-flex pt-[20px]">
      <div className="Frame5276 w-full h-auto relative">
        <div className="text-[40px] font-bold mb-[20px] leading-[54px]">{content.title[locale as string]}</div>
        <Link href="/policy/privacy">
          <a className="text-[#0060ff]">- {locale === LANGUAGES.VI ? "Chính sách bảo mật thông tin cá nhân" : "Privacy policy of personal information"}</a>
        </Link>
        <br />
        <Link href="/policy/return">
          <a className="text-[#0060ff]">- {locale === LANGUAGES.VI ? "Chính sách đổi trả" : "Return policy"}</a>
        </Link>
        <br />
        <Link href="/policy/payment">
          <a className="text-[#0060ff]">- {locale === LANGUAGES.VI ? "Phương thức và điều khoản thanh toán" : "Payment methods and terms"}</a>
        </Link>
      </div>
    </div>
  )
}

export default memo(PolicyGeneral)
