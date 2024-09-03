import React from 'react';
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ name, contact, review }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.contact}>{contact}</p>
            </div>
            <div className={styles.cardBody}>
                <p className={styles.review}>"{review}"</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
