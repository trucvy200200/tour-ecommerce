import Modal from '@/components/common/modal'

interface Props {
    isOpen: boolean,
    setOpenModal: (value: boolean) => void
}
const Login = (props: Props) => {
    return (
        <Modal open={props.isOpen} onCancel={() => props.setOpenModal(false)} width={500}>
            <div className=''>
                <div className='font-bold text-[30px] text-center'>Sign in</div>
                <div className='text-[20px] text-center'>Sign in for more features!</div>
                <div>
                    <div>
                        <div className='text-[20px] font-bold'>Email</div>
                        <input type="text" placeholder='Email' className='border-[1px] border-[#000] px-3 py-2 outline-none rounded-[8px] w-full' />
                    </div>
                    <div>
                        <div className='text-[20px] font-bold'>Password</div>
                        <input type="text" placeholder='Password' className='border-[1px] border-[#000] px-3 py-2 outline-none rounded-[8px] w-full' />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Login