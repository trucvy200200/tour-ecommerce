import Modal from '@/components/common/modal'

interface Props {
    isOpen: boolean,
    setOpenModal: (value: boolean) => void
}
const Login = (props: Props) => {
    return (
        <Modal open={props.isOpen} onCancel={() => props.setOpenModal(false)}>
            asdasd
        </Modal>
    )
}

export default Login