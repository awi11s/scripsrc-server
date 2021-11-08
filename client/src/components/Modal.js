import React from 'react'
import { Button } from './styles'

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50%',
    zIndex: 1000
}
const Modal = ({ open, children, onClose }) => {
    if(!open) return null

    return (
        <div style={MODAL_STYLE}>
            <Button onClick={onClose}>x</Button>
            {children}
        </div>
    )
}

export default Modal;
