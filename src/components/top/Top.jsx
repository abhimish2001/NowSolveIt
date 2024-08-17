import styles from './Top.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

const Top = () => {
    return (
        <div className={styles.headerTop}>
            <div className="container">
                <div className={styles.headerRow}>
                    <div className={styles.headerLeft}>
                        <ul className={styles.headerInfo}>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                                <a href="tel:919711598003">xxxxxxxxxx, xxxxxxxxxx</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                                <a href="mailto:test@xyzil.com">test@xyz.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.headerRight}>
                        <ul className={styles.headerInfo}>
                            <li>
                                <FontAwesomeIcon icon={faClock} className={styles.icon} />
                                <span>Mon - Sat: 09:00am To 07:00pm</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
