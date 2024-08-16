import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styles.aboutUsSection}>
            <div className={`container ${styles.aboutUsCard}`}>
                <h2 className={styles.title}>About Us</h2>
                <p className={styles.subtitle}>
                    At <strong>NowSolveIt</strong>, we are passionate about empowering individuals and teams through innovative learning and development solutions.
                </p>
                <p className={styles.description}>
                    Our mission is to bridge the gap between knowledge and practice. We offer practical skills and real-world applications to help our learners excel in their careers. Whether youre starting out or advancing in your field, NowSolveIt is here to support your growth, creativity, and success.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
