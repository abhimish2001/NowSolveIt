import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css'; // Import CSS module for custom styling
import Modal from '../modal/Modal'; // Adjust the path as needed
import PrivacyPolicy from '../privacypolicy/PrivacyPolicy'; // Adjust the path as needed
import TermsOfService from '../termsofservice/TermsOfService'; // Adjust the path as needed
import Faqs from '../faqs/Faqs'
function Footer() {
    const [isPrivacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
    const [isTermsOfServiceOpen, setTermsOfServiceOpen] = useState(false);
    const [isFaqs, setFaqs] = useState(false);


    return (
        <footer className={`bg-dark text-light pt-5 ${styles.footer}`}>
            <div className="container text-center">
                <div className="row mb-4">
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <h5 className="text-uppercase">About NowSolveIt</h5>
                        <p>
                            Our goal is to empower individuals with the skills and confidence needed to excel in their careers and personal growth.
                        </p>

                    </div>
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <NavLink to="/home" className={`text-light d-block mb-2 ${styles.link}`} activeclassname={styles.activeLink}>HOME</NavLink>
                        <NavLink to="/courses" className={`text-light d-block mb-2 ${styles.link}`} activeclassname={styles.activeLink}>COURSES</NavLink>
                        <NavLink to="/contact" className={`text-light d-block mb-2 ${styles.link}`} activeclassname={styles.activeLink}>CONTACT US</NavLink>

                    </div>
                    <div className="col-lg-4">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <a href="#" className={`text-light ${styles.socialIcon}`}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className={`text-light ${styles.socialIcon}`}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className={`text-light ${styles.socialIcon}`}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#" className={`text-light ${styles.socialIcon}`}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-12">

                        <button onClick={() => setPrivacyPolicyOpen(true)} className="text-light mx-2 btn btn-link">Privacy Policy</button>
                        <button onClick={() => setTermsOfServiceOpen(true)} className="text-light mx-2 btn btn-link">Terms of Service</button>
                        <button onClick={() => setFaqs(true)} className="text-light mx-2 btn btn-link">FAQs</button>
                        <p className='mt-3'>&copy; 2024 NowSolveIt. All Rights Reserved.</p>

                    </div>
                </div>
            </div>

            {/* Modal Components */}
            <Modal isOpen={isPrivacyPolicyOpen} onClose={() => setPrivacyPolicyOpen(false)}>
                <PrivacyPolicy />
            </Modal>

            <Modal isOpen={isTermsOfServiceOpen} onClose={() => setTermsOfServiceOpen(false)}>
                <TermsOfService />
            </Modal>
            <Modal isOpen={isFaqs} onClose={() => setFaqs(false)}>
                <Faqs />
            </Modal>
        </footer>
    );
}

export default Footer;
