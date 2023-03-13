import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, []);

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className='fixed inset-0 bg-gray-300 opacity-80'></div>
            <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-10 bg-black'>
                <div className='flex flex-col justify-between h-full'>
                    {children}
                    <div>
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,

        document.querySelector('.modal-container')
    );
}

export default Modal;