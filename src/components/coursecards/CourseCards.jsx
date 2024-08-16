import PropTypes from 'prop-types';
import styles from './CourseCards.module.css';  // Import your styles

const CourseCard = ({ course }) => {
    const { name, price, duration, description, image } = course;

    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.courseImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.courseName}>{name}</h3>
                <p className={styles.courseDescription}>{description}</p>
                <p className={styles.courseDuration}><strong>Duration:</strong> {duration}</p>
                <p className={styles.coursePrice}><strong>Price:</strong> ${price}</p>
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
