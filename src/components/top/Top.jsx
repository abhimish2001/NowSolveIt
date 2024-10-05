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
                                <a href="https://wa.me/918005122321">8005122321, 7897475542</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                                <a href="mailto:info@nowsolveit.com">info@nowsolveit.com</a>
                            </li>
                        </ul>
                    </div>
                    {/*<div className={styles.headerRight}>
                        <ul className={styles.headerInfo}>
                            <li>
                                <FontAwesomeIcon icon={faClock} className={styles.icon} />
                                <span className='mx-2'> Mon - Sat: 09:00am To 07:00pm</span>
                            </li>
                        </ul>
                    </div>*/}
                </div>
            </div>
        </div>
    );
};

export default Top;
