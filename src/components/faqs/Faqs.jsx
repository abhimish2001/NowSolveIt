import React from 'react';
import styles from './Faqs.module.css';
import { NavLink } from 'react-router-dom';

const Faqs = () => {
    return (
        <div className={`container ${styles.faqSection}`}>
            <h2>Frequently Asked Questions (FAQs)</h2>

            <div className={styles.faqItem}>
                <h3 className={styles.faqTitle}>Do I need to create an account to access NowSolveIt services?</h3>
                <p className={styles.faqText}>
                    No, you don't need to create an account or log in to access NowSolveIt's courses and services. Our platform is designed to provide easy access to learning resources without any registration barriers.
                </p>
            </div>

            <div className={styles.faqItem}>
                <h3 className={styles.faqTitle}>Is NowSolveIt free to use?</h3>
                <p className={styles.faqText}>
                    Yes, many of our courses and learning resources are available for free. However, certain advanced courses or premium features may require a fee.
                </p>
            </div>

            <div className={styles.faqItem}>
                <h3 className={styles.faqTitle}>How can I enroll in a course?</h3>
                <p className={styles.faqText}>
                    To enroll in a course, simply browse through our available courses, click on the one you're interested in, and start learning. No login or sign-up is necessary.
                </p>
            </div>

            <div className={styles.faqItem}>
                <h3 className={styles.faqTitle}>Can I track my progress without creating an account?</h3>
                <p className={styles.faqText}>
                    Currently, NowSolveIt does not require an account for tracking progress. You can directly access the content and resume where you left off by bookmarking the pages or following course outlines.
                </p>
            </div>

            <div className={styles.faqItem}>
                <h3 className={styles.faqTitle}>What kind of support do I get if I don’t have an account?</h3>
                <p className={styles.faqText}>
                    All users, whether they are registered or not, have access to the same level of customer support through our <NavLink to="/contact">Contact Us</NavLink> page. Feel free to reach out for any assistance you need.
                </p>
            </div>

            <div className={styles.faqItem}>
                <h3 className={styles.faqTitle}>How can I access premium content?</h3>
                <p className={styles.faqText}>
                    Premium content is available without the need to create an account. You can directly purchase or access any premium material and get started immediately.
                </p>
            </div>

            <div className={styles.faqItem}>
                <h3 className={styles.faqTitle}>Will NowSolveIt offer account features in the future?</h3>
                <p className={styles.faqText}>
                    We are constantly improving our platform, and in the future, we may introduce optional account features to help users track progress, manage courses, and receive personalized recommendations.
                </p>
            </div>
        </div>
    );
};

export default Faqs;
