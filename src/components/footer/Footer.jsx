import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container text-center">
                <div className="row mb-4">
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <h5 className="text-uppercase">About NowSolveIt</h5>
                        <p>
                            Providing top-notch training and development solutions for a better learning experience.
                        </p>
                    </div>
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <h5 className="text-uppercase">Quick Links</h5>
                        <NavLink to="/home" className="text-light d-block mb-2" activeClassName="active-link">Home</NavLink>
                        <NavLink to="/courses" className="text-light d-block mb-2" activeClassName="active-link">Courses</NavLink>
                        <NavLink to="/contact" className="text-light d-block mb-2" activeClassName="active-link">Contact Us</NavLink>
                        <NavLink to="/faqs" className="text-light d-block mb-2" activeClassName="active-link">FAQs</NavLink>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <a href="#" className="text-light mt-4 p-4">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="text-light mt-4 p-4">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-light mt-4 p-4">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#" className="text-light mt-4 p-4">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                <hr className="my-4" />
                <p>&copy; 2024 NowSolveIt. All Rights Reserved.</p>
                <a href="#" className="text-light mx-2">Privacy Policy</a>
                <a href="#" className="text-light mx-2">Terms of Service</a>
            </div>
        </footer>
    );
}

export default Footer;
