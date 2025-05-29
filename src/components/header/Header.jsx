import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './Header.module.css';

// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleUserInfo = () => {
    setShowUserInfo((prev) => !prev);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarCustom}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand fs-2 ${styles.customBrand}`} to="/">
          NowSolveIt
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1 fs-5 fw-bold">
              <Link className={`nav-link ${location.pathname === '/home' ? styles.activeLink : ''}`} to="/home">Home</Link>
            </li>
            <li className="nav-item mx-1 fs-5 fw-bold">
              <Link className={`nav-link ${location.pathname === '/courses' ? styles.activeLink : ''}`} to="/courses">Courses</Link>
            </li>
            <li className="nav-item mx-1 fs-5 fw-bold">
              <Link className={`nav-link ${location.pathname === '/contact' ? styles.activeLink : ''}`} to="/contact">Contact Us</Link>
            </li>

            {user ? (
              <li className="nav-item mx-2 fs-5 fw-bold position-relative">
                <button
                  className="btn p-0 border-0 bg-transparent"
                  onClick={toggleUserInfo}
                  aria-label="Toggle user info"
                >
                  <FontAwesomeIcon icon={faUser} className="text-dark fs-4 pt-2" />
                </button>

                {showUserInfo && (
                  <div className={`position-absolute bg-white shadow p-3 rounded ${styles.userBox}`} style={{ top: '100%', right: 0, zIndex: 1000 }}>
                    <p className={styles.usernameText}>{user.name ? ` ${user.name}` : ''}</p>

                    <button className="btn btn-outline-danger btn-sm d-flex align-items-center gap-2" onClick={logout}>
                      <FontAwesomeIcon icon={faRightFromBracket} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <li className="nav-item mx-1 fs-5 fw-bold d-flex align-items-center gap-1">
                <Link className={`nav-link ${location.pathname === '/login' ? styles.activeLink : ''}`} to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
