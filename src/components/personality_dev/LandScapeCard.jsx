import React from 'react';
import styles from './LandscapeCard.module.css';

const LandScapeCard = ({ title, description, points, image }) => {
    return (
        <div className={styles.card}>
            <div className={styles.textSection}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <ul className={styles.pointsList}>
                    {points.map((point, index) => (
                        <li key={index} className={styles.point}>{point}</li>
                    ))}
                </ul>
                <button className={styles.enrollButton}>Enroll Now</button> {/* Added enroll button */}
            </div>
            <div className={styles.imageSection}>
                <img src={image} alt={title} className={styles.image} />
            </div>
        </div>
    );
};

export default LandScapeCard;
