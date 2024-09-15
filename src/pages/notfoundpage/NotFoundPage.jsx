import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css'; // Create this CSS module for styling

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.heading}>404</h1>
            <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/home" className={styles.homeLink}>Go Back to Home</Link>
        </div>
    );
};

export default NotFoundPage;
