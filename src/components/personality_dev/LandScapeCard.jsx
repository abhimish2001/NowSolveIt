import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import styles from './LandScapeCard.module.css';

const LandScapeCard = ({ title, description, points, image }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    {/*const openEnrollmentForm = () => {
        // Navigate to the enrollment form within the app
        navigate('/enrollment');
    };*/}

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
                <a
                    href="https://forms.gle/o2ozmj6UvnHznhvo7" // Replace with your Google Form link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.enrollButton}
                >
                    Enroll Now
                </a>
            </div>
            <div className={styles.imageSection}>
                <img src={image} alt={title} className={styles.image} />
            </div>
        </div>
    );
};

export default LandScapeCard;
