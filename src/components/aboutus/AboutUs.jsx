
import styles from "./AboutUs.module.css"; // Import CSS module
import aboutUsImg from '../../assets/christina.jpg'

function AboutUs() {


    return (

        <section className={styles.aboutSection}>
            <div className="container">
                {/* Centered About Us heading */}
                <h1 className={`text-center mt-2 mb-5 fw-bold ${styles.lineFeature}`}>
                    About Us
                </h1>

                {/* Content row for image and details */}
                <div className={styles.aboutSection_row}>
                    {/* Image with slow slide-in-left effect */}
                    <div className={`wow animate__animated animate__slideInLeft ${styles.aboutSection_imgBox} animate__slow`}>
                        <img
                            src={aboutUsImg}
                            className={styles.aboutSection_img}
                            alt="About Us"
                        />
                    </div>

                    {/* Text with slow slide-in-right effect */}
                    <div className={`wow animate__animated animate__slideInRight ${styles.aboutSection_detailBox} animate__slow`}>
                        <p className={styles.highlight}>
                            "Our mission is to bridge the gap between knowledge and practice.
                            We offer practical skills and real-world applications to help our
                            learners excel in their careers. Whether you're starting out or
                            advancing in your field, NowSolveIt is here to support your growth,
                            creativity, and success."
                        </p>
                        <p className={styles.paragraph}>
                            Established with the vision of creating a dynamic learning environment,
                            NowSolveIt aims to provide a platform that fosters continuous learning.
                            Our courses are designed to be accessible, engaging, and aligned with
                            the latest industry standards. We believe that learning should be a
                            lifelong journey, and we are committed to providing our learners with
                            the tools they need to stay ahead in the ever-changing professional
                            landscape. Our team of expert educators, developers, and mentors work
                            tirelessly to ensure that the learning experience is not only informative
                            but also transformational.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default AboutUs;
