import React, { useState } from 'react';
import { IoArrowDownCircleSharp, IoArrowUpCircleSharp } from "react-icons/io5";

import styles from '../../styles/Accordion.module.css';

interface Accordion {
    title: string,
    content: string,
}

const Accordion = (props: Accordion) => {

    const { title, content } = props;

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.accordionContainer}>
            <div className={styles.accordion}>
                <div
                    className={styles.accordionItem}
                    onClick={() => setIsActive(!isActive)}
                >
                    <div className={styles.accordionTitle}>
                        <span>{title}</span>
                        <div>
                            {isActive ? <IoArrowUpCircleSharp size={32} /> : <IoArrowDownCircleSharp size={32} />}
                        </div>
                    </div>
                    {isActive && <span className={styles.accordionContent}>{content}</span>}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
