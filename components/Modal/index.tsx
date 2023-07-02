import React, { useState } from 'react';
import styles from '../../styles/Modal.module.css';

import { IoCloseOutline } from "react-icons/io5";


const Modal = (props: { title: any; children: any; }) => {
    const { display, title, children } = props;

    const [show, setShow] = useState(false);

    const handleCloseClick = () => {
        setShow(!show);
    };

    console.log('SHOW???')

    return (
        display &&
        (<div className={styles.topModalContainer}>
            <div className={styles.modalContainer}>
                <div className={styles.buttonContainer}>
                    <h4>{title}</h4>
                    <IoCloseOutline onClick={handleCloseClick} className={styles.closeButton} />
                </div>
                <div className={styles.contentContainer}>
                    {children}
                </div>
            </div>
        </div>)
    )
}

export default Modal;