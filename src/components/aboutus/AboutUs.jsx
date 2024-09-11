import React from "react";
import styles from "./AboutUs.module.css"; // Import the CSS module


function AboutUs() {
  return (
    <>
      <section className="about_section layout_padding-bottom">
        <div className="container">
          <div className={styles.aboutSection_row}>
            <div className={`row ${styles.aboutSection_imgBox}`}>
              <img src="\images\christina.jpg" className={styles.aboutSection_img} alt="About Us Image 1" />
            </div>
            <div className={styles.aboutSection_detailBox}>
              <div className="heading_container mt-0">
                <h1>About Us</h1> {/* Changed from h2 to h1 */}
              </div>
              <p className=" wow animate__animated animate__slideInRight">"Our mission is to bridge the gap between knowledge and practice. We offer practical skills and real-world applications to help
                 our learners excel in their careers. Whether you're starting out or advancing in your field, 
                 NowSolveIt is here to support your growth, creativity, and success.Established with the vision of 
                 creating a dynamic learning environment, NowSolveIt aims to provide a platform that fosters continuous
                  learning. 
              </p>
              <p>Our courses are designed to be accessible, engaging, and aligned with the latest industry standards.We believe that learning should be a lifelong journey, 
                  and we are committed to providing our learners with the tools they need to stay ahead in the ever-changing professional landscape.Our team of expert educators, developers, and mentors work 
                  tirelessly to ensure that the learning experience is not only informative but also transformational.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
