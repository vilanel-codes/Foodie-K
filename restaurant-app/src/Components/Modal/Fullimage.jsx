import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from "react-icons/ai";

export default function FullImageModal({ ModalState }) {
    
    const [modalState, setModalState] = ModalState;
    const cancelButtonRef = useRef(null)

    const onClose = () =>{
        setModalState({...modalState, open: false});
    }

    return (
        <Transition.Root show={modalState.open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={onClose}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle">
                            <div className="bg-white p-4">
                                    <div className="text-center">
                                        <div className="flex justify-between">
                                            <Dialog.Title as="h3" className="text-2xl leading-6 font-medium text-gray-900">
                                               
                                            </Dialog.Title>
                                            <button type="button" className="text-red-500 mb-2"
                                                onClick={() => setModalState({...modalState, open: false})}
                                                ref={cancelButtonRef}><AiOutlineClose size={'1.5rem'} /></button>
                                        </div>
                                        <div className="bg-orange-400">
                                            <img src={modalState.image}/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}