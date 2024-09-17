import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import { useEffect } from 'react';

function Header() {
    const location = useLocation();

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg  ${styles.navbarCustom}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand fs-2 ${styles.customBrand}`} to="/">
                    NowSolveIt
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-1 fs-5 fw-bold">
                            <Link
                                className={`nav-link ${location.pathname === '/home' ? styles.activeLink : ''}`}
                                to="/home"
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
