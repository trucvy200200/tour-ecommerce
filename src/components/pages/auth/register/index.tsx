import Modal from '@/components/common/modal'
import { useState } from 'react'
import { useEffect } from 'react'
import { useAuth } from "@/stores/auth"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { passwordPattern } from "@/constants/base.constant"
import InputBorder from "@/components/common/input-border"
import Loading from '@/components/common/loading-background'
import { notifyError } from '@/helpers/toast.helper'

interface Props {
    isOpen: boolean
    setOpenModal: (value: boolean) => void
    setOpenLoginModal: (value: boolean) => void
}

const Register = (props: Props) => {
    const [gender, setGender] = useState("male")
    const [loading, setLoading] = useState(false)
    const [, actionAuth] = useAuth()

    const schemaRegister = yup.object().shape({
        fullName: yup.string().required("Please enter your full name"),
        email: yup.string().email("Email is invalid").required("Please enter your email"),
        address: yup.string().required("Please enter your address"),
        password: yup.string().required("Please enter your password").matches(passwordPattern, 'Minimum 8 characters, at least 1 letter, 1 number and 1 special character'),
        confirmPassword: yup
            .string()
            .required('Please enter confirm password')
            .matches(passwordPattern, 'Minimum 8 characters, at least 1 letter, 1 number and 1 special character')
            .oneOf([yup.ref("password"), ""], "Confirm password is incorrect")
    })

    const {
        reset,
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        clearErrors
    } = useForm({ resolver: yupResolver(schemaRegister) })

    const onSubmit = async (data: any) => {
        if (!gender) return notifyError("Please select gender")

        const { confirmPassword, ...rest } = data
        setLoading(true)

        const result = await actionAuth.registerAsync({ ...rest })
        setLoading(false)

        try {
            if (result?.errCode === 200) {
                props.setOpenModal(false)
                props.setOpenLoginModal(true)
                reset()
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            {loading && <Loading />}
            <Modal open={props.isOpen} onCancel={() => props.setOpenModal(false)} width={500}>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='font-bold text-[30px] text-center'>Sign up your account</div>
                    <div className='flex flex-col overflow-y-auto h-[60vh]'>
                        <div>
                            <div className='text-[20px] font-bold'>Full name</div>
                            <InputBorder
                                classNameWrapper="border-[1px] border-[#000] px-3 py-2 rounded-[8px] w-full"
                                register={register("fullName")}
                                name="fullName"
                                type="text"
                                placeholder={"Enter your full name"}
                                errors={errors}
                                clearErrors={clearErrors}
                                setValue={setValue}
                            />
                        </div>
                        <div>
                            <div className='text-[20px] font-bold'>Address</div>
                            <InputBorder
                                classNameWrapper="border-[1px] border-[#000] px-3 py-2 rounded-[8px] w-full"
                                register={register("address")}
                                name="address"
                                type="text"
                                placeholder={"Enter your address"}
                                errors={errors}
                                clearErrors={clearErrors}
                                setValue={setValue}
                            />
                        </div>
                        <div>
                            <div className='text-[20px] font-bold'>Email</div>
                            <InputBorder
                                classNameWrapper="border-[1px] border-[#000] px-3 py-2 rounded-[8px] w-full"
                                register={register("email")}
                                name="email"
                                type="email"
                                placeholder={"Enter your email"}
                                errors={errors}
                                clearErrors={clearErrors}
                                setValue={setValue}
                            />
                        </div>
                        <div>
                            <div className='text-[20px] font-bold'>Password</div>
                            <InputBorder
                                classNameWrapper="border-[1px] border-[#000] px-3 py-2 rounded-[8px] w-full"
                                register={register("password")}
                                name="password"
                                type="password"
                                placeholder={"Enter your password"}
                                errors={errors}
                                clearErrors={clearErrors}
                                setValue={setValue}
                            />
                        </div>
                        <div>
                            <div className='text-[20px] font-bold'>Confirm password</div>
                            <InputBorder
                                classNameWrapper="border-[1px] border-[#000] px-3 py-2 rounded-[8px] w-full"
                                register={register("confirmPassword")}
                                name="confirmPassword"
                                type="password"
                                placeholder={"Enter confirm password"}
                                errors={errors}
                                clearErrors={clearErrors}
                                setValue={setValue}
                            />
                        </div>
                        <div>
                            <div className='text-[20px] font-bold'>Gender</div>
                            <div className='flex gap-6'>
                                <div className='flex gap-3 items-center text-[16px]'>
                                    <input type="radio" id="gender" checked={gender === "male"} value="male"
                                        onChange={() => setGender("male")} className='h-[20px] w-[20px]' />
                                    Male
                                </div>
                                <div className='flex gap-3 items-center text-[16px]'>
                                    <input type="radio" id="gender" checked={gender === "female"} value="female"
                                        onChange={() => setGender("female")} className='h-[20px] w-[20px]' />
                                    Female
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className='mt-2 font-bold text-[20px] py-2 w-full bg-[#166699] text-center text-white cursor-pointer rounded-[8px]'>
                        Register
                    </button>
                    <div className='text-center mt-1'>Already have an account? <span onClick={() => { props.setOpenModal(false), props.setOpenLoginModal(true) }} className='text-[#166699] cursor-pointer hover:underline'>Sign in</span></div>
                </form>
            </Modal>
        </>
    )
}

export default Register