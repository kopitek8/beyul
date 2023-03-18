import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";

import styles from '../../styles/Modal.module.css';

// interface ModalInterface {
//     show: boolean;
//     onClose: (e: Event) => void;
//     children: React.ReactNode;
//     title: string;
// }

const Modal = (props: { show: any; onClose: any; title: any; children: any; }) => {
    const { show, onClose, title, children } = props;

    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose(e);
    };


    const renderModal = show ? (
        <div className={styles.container}>
            <div className={styles.modalContainer}>
                <div className={styles.buttonContainer}>
                    <span>{title}</span>
                    <IoCloseOutline size={32} onClick={handleCloseClick} />
                </div>
                <div className={styles.contentContainer}>
                    {children}
                </div>
            </div>
        </div>
    ) : null;

    { isBrowser ? renderModal : null }
};

export default Modal;
