import { getFromLocalStorage, getFromCookieWithName } from "@/helpers/base.helper"
import { KEY_COOKIE } from "@/constants/key-cookie.constant"
import { useEffect, useState } from "react"

export const useLogin = () => {
  const isLogin = getFromLocalStorage("isLogin")
  const userData = getFromLocalStorage("userData")
  const token = getFromCookieWithName(null, KEY_COOKIE.TOKEN)
  const [value, setValue] = useState(null)

  useEffect(() => {
    setValue(token && isLogin && userData?.id)
    if (!token || !isLogin || !userData?.id) {
      window.location.href = "/"
    }
  }, [])

  return value
}
