'use client'
import { useState, useEffect, memo } from "react"
import Flatpickr from "react-flatpickr"
import { yupResolver } from "@hookform/resolvers/yup"
import { VscTriangleDown } from "react-icons/vsc"
import Image from "next/image"
import "flatpickr/dist/flatpickr.css"
import ForgotPasswordModal from "@/components/pages/profile/resetPasswordModal"
import VerifyEmailModal from "@/components/pages/profile/verifyEmailModal"
// import { useAccount } from "stores/account"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import ErrorText from "@/components/common/error-text"
// import { PROFILE_MODEL } from "models/account.model"
// import { getUserProfileService } from "services/account"
// import { renderTimeCallAPI, convertDateDefaultV3 } from "utilities/ConvertDate"
// import { notifyError, notifySuccess } from "helpers/toast.helper"
import { phonePattern } from "@/constants/base.constant"

const profile = {
    fullName: 'VU HOANG TRUC VY',
    phone: '01231232',
    gender: 'female',
    birthday: '10/10/2000',
    email: 'sadsa@gamsd.com'
}
const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenVerify, setIsOpenVerify] = useState(false)
    const [editField, setEditField] = useState<any>({})
    // const [, actionsAccount] = useAccount()
    // const [profile, setProfile] = useState({} as PROFILE_MODEL)
    const [birthday, setBirthday] = useState("")
    const schema = yup.object().shape({
        email: yup.string().email("Email invalid"),
        fullName: yup.string().required("Please enter your full name"),
        phone: yup.string().required("Please enter your phone number").matches(phonePattern, "Phone invalid")
    })
    const [verifyCode, setVerifyCode] = useState<string>("")
    const {
        reset,
        register,
        handleSubmit,
        setValue,
        getValues,
        setError,
        formState: { errors },
        clearErrors
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fullName: "",
            phone: "",
            email: "",
            gender: ""
        }
    })

    useEffect(() => {
        apiGetProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reset])

    const apiGetProfile = async () => {
        // const result = await getUserProfileService()
        // if (result.data) {
        //     setValue("gender", result.data?.gender)
        //     setValue("fullName", result.data?.fullName)
        //     setValue("phone", result.data?.phone)
        // setBirthday(convertDateDefaultV3(result.data?.birthday))
        // setProfile(result.data)
        // }
    }

    const hideEmail = (email: string) => {
        return email?.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1*****@$2")
    }

    const handleSaveChanges = (data: any) => {
        // if (editField["email"] && getValues("email")) {
        //   setIsOpenVerify(true)
        //   return
        // }
        // apiUpdateProfile(
        //   data,
        //   () => {
        //     notifySuccess(t["Update profile successfully"])
        //     setEditField({})
        //     apiGetProfile()
        //   },
        //   () => {
        //     notifyError(t["Update profile fail"])
        //   }
        // )
    }

    const apiUpdateProfile = (data: any, handleSuccess: () => void, handleError: () => void) => {
        // if (editField["email"] && !getValues("email")) {
        //   setError("email", { type: "manual", message: t["Please enter your email"] })
        //   return
        // }
        // const date = birthday.split("/")
        // const oldData = profile
        // const newData = {
        //   ...data,
        //   birthday: renderTimeCallAPI(date[2] + "-" + date[1] + "-" + date[0]),
        //   email: getValues("email") ? getValues("email") : profile?.email
        // }

        // if (newData["fullName"] === oldData?.fullName) {
        //   delete newData["fullName"]
        // }
        // if (newData["email"] === oldData?.email) {
        //   delete newData["email"]
        // }
        // if (newData["phone"] === oldData?.phone) {
        //   delete newData["phone"]
        // }
        // if (birthday === convertDateDefaultV3(oldData?.birthday as string)) {
        //   delete newData["birthday"]
        // }
        // if (newData["gender"] === oldData?.gender) {
        //   delete newData["gender"]
        // }
        // if (newData && Object.keys(newData).length > 0) {
        //   actionsAccount.updateProfile(newData, t, handleSuccess, handleError)
        // } else {
        //   setEditField({})
        // }
    }
    const handleUpdateEmail = (verificationCode: string, handleSuccess: () => void, handleError: () => void) => {
        // const date = birthday.split("/")
        // const newData = {
        //   ...getValues(),
        //   birthday: renderTimeCallAPI(date[2] + "-" + date[1] + "-" + date[0]),
        //   verificationCode: verificationCode
        // }

        // apiUpdateProfile(
        //   newData,
        //   () => {
        //     handleSuccess(), setEditField({}), apiGetProfile(), reset({ ...getValues(), email: "" })
        //   },
        //   handleError
        // )
    }

    const handleShowEditBox = (name: string) => {
        // const field = { ...editField }
        // if (field[name] === true) {
        //   delete field[name]
        // } else {
        //   field[name] = true
        // }
        // switch (name) {
        //   case "fullName":
        //   case "email":
        //   case "phone":
        //     if (getValues(name) === "") {
        //       setValue(name, profile?.[name] as string)
        //       clearErrors(name)
        //     }
        //     break
        // }
        // setEditField(field)
    }

    return (
        <div className="container px-2.5 py-[24px] rounded-[8px] min-h-[300px] mt-[140px] flex-1">
            <form onSubmit={handleSubmit(handleSaveChanges)} className="flex flex-col h-full justify-between">
                <div className="grid grid-cols-1 gap-[20px] md:gap-[40px]  lg:grid-cols-3 md:grid-cols-2 lg:gap-[70px] mb-[40px] lg:mb-[70px]">
                    <div className="flex flex-col gap-2 md:gap-5">
                        <div className="flex items-center justify-between gap-2">
                            <div className="font-[500] text-[18px]">{"Full name"}</div>
                            <div
                                onClick={() => {
                                    handleShowEditBox("fullName")
                                }}
                                className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#16447F] bg-opacity-5 text-[16px] cursor-pointer"
                            >
                                <Image width={16} height={16} src={editField["fullName"] ? "/icons/ic-close-edit.svg" : "/icons/ic-edit.svg"} alt="edit" />
                            </div>
                        </div>
                        {editField["fullName"] ? (
                            <>
                                <div className="relative">
                                    <input
                                        {...register("fullName")}
                                        type="text"
                                        name="fullName"
                                        defaultValue={getValues("fullName") || ""}
                                        placeholder={'Please enter full name'}
                                        onChange={(e: any) => {
                                            const value = e.target.value
                                            clearErrors("fullName")
                                            setValue("fullName", value)
                                        }}
                                        className="placeholder-gray-500 outline-none pr-10 border border-[#000000] rounded-[10px] p-[10px] w-full bg-transparent"
                                    />
                                    <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                                        {getValues("fullName") && <Image onClick={() => reset({ ...getValues(), fullName: "" })} src={"/icons/ic-cancel.svg"} alt="edit" width={24} height={24} />}
                                    </div>
                                </div>
                                {errors["fullName"] && <ErrorText>{errors["fullName"].message}</ErrorText>}
                            </>
                        ) : profile?.fullName ? (
                            <div className="text-[16px] border border-[#000000] rounded-[10px] p-[10px] w-full bg-transparent">{profile?.fullName}</div>
                        ) : (
                            <div className="text-gray-500 text-[16px]"> {'Please enter full name'}</div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 md:gap-5">
                        <div className="flex items-center justify-between gap-2">
                            <div className="font-[500] text-[18px]">Email</div>
                            <div
                                onClick={() => {
                                    handleShowEditBox("email")
                                }}
                                className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#16447F] bg-opacity-5 text-[16px] cursor-pointer"
                            >
                                <Image width={16} height={16} src={editField["email"] ? "/icons/ic-close-edit.svg" : "/icons/ic-edit.svg"} alt="edit" />
                            </div>
                        </div>
                        {editField["email"] ? (
                            <>
                                <div className="relative">
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder={"Please enter email"}
                                        name="email"
                                        defaultValue={""}
                                        onChange={(e: any) => {
                                            const value = e.target.value
                                            clearErrors("email")
                                            setValue("email", value)
                                        }}
                                        className="placeholder-gray-500 outline-none pr-10 border border-[#000000] rounded-[10px] p-[10px] w-full bg-transparent"
                                    />
                                    <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                                        {getValues("email") && <Image onClick={() => reset({ ...getValues(), email: "" })} src={"/icons/ic-cancel.svg"} alt="edit" width={24} height={24} />}
                                    </div>
                                </div>
                                {errors["email"] && <ErrorText>{errors["email"].message}</ErrorText>}
                            </>
                        ) : profile?.email ? (
                            <div className="text-[16px] border border-[#000000] rounded-[10px] p-[10px] w-full bg-transparent">{hideEmail(profile?.email)}</div>
                        ) : (
                            <div className="text-gray-500 text-[16px]">Please enter email</div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 md:gap-5">
                        <div className="flex items-center justify-between gap-2">
                            <div className="font-[500] text-[18px]">Phone number</div>
                            <div
                                onClick={() => {
                                    handleShowEditBox("phone")
                                }}
                                className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#16447F] bg-opacity-5 text-[16px] cursor-pointer"
                            >
                                <Image width={16} height={16} src={editField["phone"] ? "/icons/ic-close-edit.svg" : "/icons/ic-edit.svg"} alt="edit" />
                            </div>
                        </div>
                        {editField["phone"] ? (
                            <>
                                <div className="relative">
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        name="phone"
                                        defaultValue={getValues("phone") || ""}
                                        placeholder={'Please enter phone number'}
                                        onChange={(e: any) => {
                                            const value = e.target.value
                                            clearErrors("phone")
                                            setValue("phone", value)
                                        }}
                                        className="placeholder-gray-500 outline-none pr-10 border border-[#000000] rounded-[10px] p-[10px] w-full bg-transparent"
                                    />
                                    <div className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                                        {editField["phone"] && (
                                            <Image
                                                onClick={() => {
                                                    reset((formValues: any) => ({
                                                        ...formValues,
                                                        phone: ""
                                                    }))
                                                }}
                                                src={"/icons/ic-cancel.svg"}
                                                alt="edit"
                                                width={24}
                                                height={24}
                                            />
                                        )}
                                    </div>
                                </div>
                                {errors["phone"] && <ErrorText>{errors["phone"].message}</ErrorText>}
                            </>
                        ) : profile?.phone ? (
                            <div className="text-[16px] border border-[#000000] rounded-[10px] p-[10px] w-full bg-transparent">{profile?.phone}</div>
                        ) : (
                            <div className="text-gray-500 text-[16px]">Please enter phone number</div>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 md:gap-5">
                        <div className="flex items-center gap-2">
                            <div className="font-[500] text-[18px]">Date of birth</div>
                        </div>
                        <div className="relative">
                            <Flatpickr
                                name="birthday"
                                options={{
                                    disableMobile: true,
                                    dateFormat: "d/m/Y",
                                    maxDate: "today"
                                }}
                                value={birthday || ""}
                                onChange={(_: any, date: string) => {
                                    setBirthday(date)
                                    setEditField({ ...editField, birthday: true })
                                }}
                                id="release"
                                className={"w-full relative focus:outline-none cursor-pointer bg-transparent text-[16px] border border-[#000000] rounded-[10px] p-[10px]"}
                            />
                            <div className="absolute inset-y-0 right-[10px] flex items-center pointer-events-none">
                                <VscTriangleDown className="text-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-5">
                        <div className="flex items-center gap-2">
                            <div className="font-[500] text-[18px]">Gender</div>
                        </div>
                        <div className="flex gap-4 text-[20px] h-[46px] px-[10px]">
                            <div className="inline-flex items-center gap-2">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input
                                        {...register("gender")}
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        id="male"
                                        onChange={(e) => {
                                            setValue("gender", e.currentTarget.id)
                                            if (profile?.gender !== "male") setEditField({ ...editField, gender: true })
                                            else setEditField({ ...editField, gender: false })
                                        }}
                                        checked={getValues("gender") === "male"}
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer 
                                        appearance-none rounded-full border-[black] border-[2px] before:opacity-0 before:transition-opacity 
                                        checked:border-[#16447F]"
                                    />
                                    <span className="absolute text-[#16447F] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 16 16" fill="currentColor">
                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                <label htmlFor="male" className="cursor-pointer text-[16px]">
                                    Male
                                </label>
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input
                                        {...register("gender")}
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                        onChange={(e) => {
                                            setValue("gender", e.currentTarget.id)
                                            if (profile?.gender !== "female") setEditField({ ...editField, gender: true })
                                            else setEditField({ ...editField, gender: false })
                                        }}
                                        checked={getValues("gender") === "female"}
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer 
                                        appearance-none rounded-full border-[black] border-[2px] before:opacity-0 before:transition-opacity 
                                        checked:border-[#16447F]"
                                    />
                                    <span className="absolute text-[#16447F] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 16 16" fill="currentColor">
                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                <label htmlFor="female" className="cursor-pointer text-[16px]">
                                    Female
                                </label>
                            </div>
                            <div className="inline-flex items-center gap-2">
                                <label className="relative flex items-center rounded-full cursor-pointer">
                                    <input
                                        {...register("gender")}
                                        type="radio"
                                        name="gender"
                                        id="other"
                                        value="other"
                                        onChange={(e) => {
                                            setValue("gender", e.currentTarget.id)
                                            if (profile?.gender !== "other") setEditField({ ...editField, gender: true })
                                            else setEditField({ ...editField, gender: false })
                                        }}
                                        checked={getValues("gender") === "other"}
                                        className="before:content[''] peer relative h-4 w-4 cursor-pointer 
                                        appearance-none rounded-full border-[black] border-[2px] before:opacity-0 before:transition-opacity 
                                        checked:border-[#16447F]"
                                    />
                                    <span className="absolute text-[#16447F] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" viewBox="0 0 16 16" fill="currentColor">
                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>
                                <label htmlFor="other" className="cursor-pointer text-[16px]">
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-start w-full gap-[20px] flex-wrap max-md:flex-col">
                    <button
                        type="submit"
                        disabled={editField["fullName"] || editField["email"] || editField["phone"] || editField["birthday"] || editField["gender"] || editField["noChange"] ? false : true}
                        className={`${!(editField["fullName"] || editField["email"] || editField["phone"] || editField["birthday"] || editField["gender"] || editField["noChange"]) && "opacity-50"
                            } cursor-pointer text-[18px] rounded-[4px] bg-transparent 
                            w-[320px] h-[40px] text-black border border-[#050226] items-center flex justify-center max-md:w-full`}
                    >
                        Save changes
                    </button>
                    <div
                        onClick={() => setIsOpen(true)}
                        className="max-md:w-full text-[18px] cursor-pointer rounded-[4px] bg-[#004aad] w-[320px] h-[40px] text-[white] items-center flex justify-center"
                    >
                        Reset password
                    </div>
                </div>
            </form>
            <ForgotPasswordModal isOpen={isOpen} setOpenModal={setIsOpen} />
            <VerifyEmailModal
                isOpen={isOpenVerify}
                setOpenModal={setIsOpenVerify}
                email={getValues("email")}
                verifyCode={verifyCode}
                handleUpdateEmail={handleUpdateEmail}
                setVerifyCode={setVerifyCode}
                profile={profile}
            />
        </div>
    )
}
export default memo(Profile)
