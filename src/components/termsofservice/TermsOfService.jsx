import React from 'react';
import styles from './TermsOfService.module.css';

const TermsOfService = () => {
    return (
        <div className={`container ${styles.termsOfService}`}>
            <h2 className={styles.title}>Terms of Service</h2>
            <p className={styles.text}>
                These terms and conditions outline the rules and regulations for the use of NowSolveIt's website and services.
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use the website if you do not agree to all of the terms and conditions stated here.
            </p>
            <h3 className={styles.sectionTitle}>License</h3>
            <p className={styles.text}>
                Unless otherwise stated, NowSolveIt and/or its licensors own the intellectual property rights for all material on this website.
                All intellectual property rights are reserved. You may access this from NowSolveIt for your own personal use, subject to restrictions set in these terms and conditions.
            </p>
            <h3 className={styles.sectionTitle}>Restrictions</h3>
            <p className={styles.text}>
                You are specifically restricted from all of the following:
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Publishing any website material in any other media</li>
                <li className={styles.listItem}>Selling, sublicensing, or otherwise commercializing any website material</li>
                <li className={styles.listItem}>Publicly performing and/or showing any website material</li>
                <li className={styles.listItem}>Using this website in any way that is damaging or harmful</li>
                <li className={styles.listItem}>Using this website in any way that impacts user access to this website</li>
            </ul>
            <h3 className={styles.sectionTitle}>Termination</h3>
            <p className={styles.text}>
                We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
            </p>
            <h3 className={styles.sectionTitle}>Limitation of Liability</h3>
            <p className={styles.text}>
                In no event shall NowSolveIt, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
            </p>
            <h3 className={styles.sectionTitle}>Changes to Terms</h3>
            <p className={styles.text}>
                NowSolveIt reserves the right to revise these terms at any time as it sees fit. By using this website, you are expected to review these terms on a regular basis.
            </p>
            <p className={styles.text}>
                If you have any questions or concerns about these terms, please feel free to contact us.
            </p>
        </div>
    );
};

export default TermsOfService;
