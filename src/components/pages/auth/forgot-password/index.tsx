import Modal from '@/components/common/modal'

interface Props {
    isOpen: boolean
    setOpenModal: (value: boolean) => void
    setOpenLoginModal: (value: boolean) => void
}

const ForgotPassword = (props: Props) => {
    return (
        <Modal open={props.isOpen} onCancel={() => props.setOpenModal(false)} width={500}>
            <div className='font-bold text-[30px] text-center'>Forgot password</div>
            <div className='text-[20px] text-center'>We will send an email to reset your password!</div>
            <div>
                <div className='text-[20px] font-bold'>Email</div>
                <input type="text" placeholder='Email' className='border-[1px] border-[#000] px-3 py-2 outline-none rounded-[8px] w-full' />
            </div>
            <div className='mt-4 font-bold text-[20px] py-2 w-full bg-[#166699] text-center text-white cursor-pointer rounded-[8px]'>
                Reset password
            </div>
        </Modal>
    )
}

export default ForgotPassword