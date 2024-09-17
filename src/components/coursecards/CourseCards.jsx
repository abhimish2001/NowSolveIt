import PropTypes from 'prop-types';
import styles from './CourseCards.module.css';  // Import your styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation


const CourseCard = ({ course }) => {
    const { name, price, duration, description, image } = course;

    const navigate = useNavigate(); // Initialize useNavigate

    {/*const openEnrollmentForm = () => {
        // Navigate to the enrollment form within the app
        navigate('/enrollment');
    };*/}


    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.courseImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.courseName}>{name}</h3>
                <p className={styles.courseDescription}>{description}</p>
                <p className={styles.courseDuration}><strong>Duration:</strong> {duration}</p>
                <p className={styles.coursePrice}><strong>Price:</strong>Rs {price}</p>
                <a
                    href="https://forms.gle/o2ozmj6UvnHznhvo7" // Replace with your Google Form link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.enrollButton}
                >
                    Enroll Now
                </a>
            </div>
        </div>
    );
};

// Define the prop types
CourseCard.propTypes = {
    course: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default CourseCard;
