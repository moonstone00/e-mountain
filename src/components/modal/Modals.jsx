// jdi kita buat ReactDOM baru lagi, ini diluar dari ReactDOM yang sudah disiapkan oleh React nya.
import ReactDOM from 'react-dom'

const BackdropOverlay = () => {
    return (
        <div>
            
        </div>
    )
}

const Modal = () => {
    return (
        <>
            {ReactDOM.createPortal()}
            {ReactDOM.createPortal()}
        </>
    )
}

export default Modal;