import Modal from '@/components/common/modal'
import { useState } from 'react'

interface Props {
    isOpen: boolean
    setOpenModal: (value: boolean) => void
    setOpenLoginModal: (value: boolean) => void
}

const Register = (props: Props) => {
    const [gender, setGender] = useState("male")

    return (
        <>
            <Modal open={props.isOpen} onCancel={() => props.setOpenModal(false)} width={500}>
                <div className='font-bold text-[30px] text-center'>Sign up your account</div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <div className='text-[20px] font-bold'>Full name</div>
                        <input type="text" placeholder='Full name' className='border-[1px] border-[#000] px-3 py-2 outline-none rounded-[8px] w-full' />
                    </div>
                    <div>
                        <div className='text-[20px] font-bold'>Address</div>
                        <input type="text" placeholder='Address' className='border-[1px] border-[#000] px-3 py-2 outline-none rounded-[8px] w-full' />
                    </div>
                    <div>
                        <div className='text-[20px] font-bold'>Email</div>
                        <input type="text" placeholder='Email' className='border-[1px] border-[#000] px-3 py-2 outline-none rounded-[8px] w-full' />
                    </div>
                    <div>
                        <div className='text-[20px] font-bold'>Password</div>
                        <input type="password" placeholder='*****' className='border-[1px] border-[#000] px-3 py-2 outline-none rounded-[8px] w-full' />
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
                    <div className='mt-2 font-bold text-[20px] py-2 w-full bg-[#166699] text-center text-white cursor-pointer rounded-[8px]'>
                        Register
                    </div>
                    <div className='text-center'>Already have an account? <span onClick={() => { props.setOpenModal(false), props.setOpenLoginModal(true) }} className='text-[#166699] cursor-pointer hover:underline'>Sign in</span></div>
                </div>
            </Modal>
        </>
    )
}

export default Register