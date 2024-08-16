import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className={`navbar-brand fs-2 ${styles.customBrand}`} to="/">NowSolveIt</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${styles.navbarCustom}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1 fs-5 fw-bold">
                            <Link
                                className={`nav-link ${location.pathname === '/' ? styles.activeLink : ''}`}
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-1 fs-5 fw-bold">
                            <Link
                                className={`nav-link ${location.pathname === '/courses' ? styles.activeLink : ''}`}
                                to="/courses"
                            >
                                Courses
                            </Link>
                        </li>
                        <li className="nav-item mx-1 fs-5 fw-bold">
                            <Link
                                className={`nav-link ${location.pathname === '/contact' ? styles.activeLink : ''}`}
                                to="/contact"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
