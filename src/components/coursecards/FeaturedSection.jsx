import { useState, useEffect } from 'react';
import CourseCard from '../coursecards/CourseCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FeaturedSection.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FeaturedSection = () => {
    const [courses, setCourses] = useState([]); // State to hold the courses fetched from the API
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const visibleCards = 6; // Cards visible in the row

    useEffect(() => {
        // Fetch the courses from the API
        fetch('http://localhost:4001/courses')
            .then(response => response.json())
            .then(data => {
                setCourses(data.courses); // Assuming your API response has a "courses" field
            })
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    useEffect(() => {
        if (courses.length > visibleCards && !isPaused) {
            const interval = setInterval(() => {
                handleNext();
            }, 3000); // Slide every 3 seconds
            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [isPaused, currentIndex, courses.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? courses.length - visibleCards : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === courses.length - visibleCards ? 0 : prevIndex + 1
        );
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div className="container-fluid">
            <h1 className="text-center mb-4 mt-4 fw-bold">Featured Courses</h1>

            <div className="position-relative">
                {courses.length > visibleCards && (
                    <button className={styles.prevButton} onClick={handlePrev}>
                        <FaArrowLeft />
                    </button>
                )}

                <div className="d-flex overflow-hidden" style={{ width: "100%" }}>
                    <div
                        className="d-flex transition-transform"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                            transition: "transform 0.5s ease-in-out"
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {courses.map((course, index) => (
                            <div key={index} className="col-2">
                                <CourseCard course={course} />
                            </div>
                        ))}
                    </div>
                </div>

                {courses.length > visibleCards && (
                    <button className={styles.nextButton} onClick={handleNext}>
                        <FaArrowRight />
                    </button>
                )}
            </div>
        </div>
    );
};

export default FeaturedSection;
