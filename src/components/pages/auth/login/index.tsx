import Modal from '@/components/common/modal'
import Register from '@/components/pages/auth/register'
import ForgotPassword from '@/components/pages/auth/forgot-password'
import { useState } from 'react'

interface Props {
    isOpen: boolean
    setOpenModal: (value: boolean) => void
}

const Login = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenForgot, setIsOpenForgot] = useState(false)

    return (
        <>
            <Modal open={props.isOpen} onCancel={() => props.setOpenModal(false)} width={500}>
                <div className=''>
                    <div className='font-bold text-[30px] text-center'>Sign in</div>
                    <div className='text-[20px] text-center'>Sign in for more features!</div>
                    <div className='flex flex-col gap-3'>
                        <div>
                            <div className='text-[20px] font-bold'>Email</div>
                            <input type="text" placeholder='Email' className='border-[1px] border-[#000] px-3 py-2 outline-none rounded-[8px] w-full' />
                        </div>
                        <div>
                            <div className='text-[20px] font-bold'>Password</div>
                            <input type="password" placeholder='*****' className='border-[1px] border-[#000] px-3 py-2 outline-none rounded-[8px] w-full' />
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2 text-[16px]'>
                                <input type="checkbox" className='h-[20px] w-[20px]' />
                                Remember me
                            </div>
                            <div onClick={() => { setIsOpenForgot(true), props.setOpenModal(false) }} className='text-[13px] text-[#166699] cursor-pointer hover:underline'>
                                Forgot password?
                            </div>
                        </div>
                        <div className='mt-2 font-bold text-[20px] py-2 w-full bg-[#166699] text-center text-white cursor-pointer rounded-[8px]'>
                            Login
                        </div>
                        <div className='text-center'>Don't have an account? <span onClick={() => { setIsOpen(true), props.setOpenModal(false) }} className='text-[#166699] cursor-pointer hover:underline'>Sign up</span></div>
                    </div>
                </div>
            </Modal>
            <Register isOpen={isOpen} setOpenModal={setIsOpen} setOpenLoginModal={props.setOpenModal} />
            <ForgotPassword isOpen={isOpenForgot} setOpenModal={setIsOpenForgot} setOpenLoginModal={props.setOpenModal} />
        </>
    )
}

export default Login