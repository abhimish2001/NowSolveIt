import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <div className={styles.aboutUsSection}>
            <div className={`container-fluid ${styles.aboutUsCard}`}>
                <h2 className={styles.title}>About Us</h2>
                <p className={styles.subtitle}>
                    At <strong>NowSolveIt</strong>, we are passionate about empowering individuals and teams through innovative learning and development solutions.
                </p>
                <p className={styles.description}>
                    Our mission is to bridge the gap between knowledge and practice. We offer practical skills and real-world applications to help our learners excel in their careers. Whether you're starting out or advancing in your field, NowSolveIt is here to support your growth, creativity, and success.
                </p>
                <p className={styles.description}>
                    Established with the vision of creating a dynamic learning environment, NowSolveIt aims to provide a platform that fosters continuous learning. Our courses are designed to be accessible, engaging, and aligned with the latest industry standards. We believe that learning should be a lifelong journey, and we are committed to providing our learners with the tools they need to stay ahead in the ever-changing professional landscape.
                </p>
                <p className={styles.description}>
                    Our team of expert educators, developers, and mentors work tirelessly to ensure that the learning experience is not only informative but also transformational. From coding bootcamps to project-based learning, our platform is equipped to offer a range of courses that cater to diverse learning needs. We strive to create a community where learners can collaborate, innovate, and grow together.
                </p>
                <p className={styles.description}>
                    Join NowSolveIt today and embark on a learning journey that equips you with the skills and confidence to tackle real-world challenges. Let’s solve it, together.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
