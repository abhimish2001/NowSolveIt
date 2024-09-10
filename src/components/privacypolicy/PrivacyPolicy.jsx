import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    return (
        <div className={`container ${styles.privacyPolicy}`}>
            <h2 className={styles.title}>Privacy Policy</h2>
            <p className={styles.text}>
                This Privacy Policy outlines how NowSolveIt collects, uses, and protects your information. We are committed to safeguarding your personal data and ensuring that your privacy is respected.
                By using our website and services, you agree to the collection and use of information in accordance with this policy.
            </p>
            <h3 className={styles.sectionTitle}>Information We Collect</h3>
            <p className={styles.text}>
                We may collect personal information such as your name, email address, phone number, and other details when you register on our site, subscribe to a newsletter, or fill out a form.
            </p>
            <h3 className={styles.sectionTitle}>How We Use Your Information</h3>
            <p className={styles.text}>
                The information we collect may be used in the following ways:
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}>To personalize your experience and respond to individual needs</li>
                <li className={styles.listItem}>To improve our website and services based on user feedback</li>
                <li className={styles.listItem}>To process transactions and manage orders</li>
                <li className={styles.listItem}>To send periodic emails regarding updates, promotions, or other services</li>
            </ul>
            <h3 className={styles.sectionTitle}>How We Protect Your Information</h3>
            <p className={styles.text}>
                We implement a variety of security measures to maintain the safety of your personal information when you access your account, submit sensitive data, or place an order.
            </p>
            <h3 className={styles.sectionTitle}>Third-Party Disclosure</h3>
            <p className={styles.text}>
                We do not sell, trade, or otherwise transfer your personal information to third parties, except for trusted partners who assist us in operating our website, conducting our business, or serving our users.
            </p>
            <h3 className={styles.sectionTitle}>Your Consent</h3>
            <p className={styles.text}>
                By using our website, you consent to our Privacy Policy. We reserve the right to update or change this policy at any time. Any changes will be posted on this page, and you should review it regularly.
            </p>
            <p className={styles.text}>
                If you have any questions or concerns about our Privacy Policy, feel free to contact us.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
