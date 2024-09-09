import { useState, useEffect } from 'react';
import CourseCard from '../coursecards/CourseCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FeaturedSection.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FeaturedSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const visibleCards = 6; // Cards visible in the row

    const courses = [
        {
            name: "Frontend",
            price: 199,
            duration: "8 Weeks",
            description: "Master HTML, CSS, and JavaScript to build beautiful websites and responsive UIs.",
            image: 'https://img.freepik.com/free-vector/frontend-development-concept-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-2357.jpg'
        },
        {
            name: "Backend",
            price: 249,
            duration: "10 Weeks",
            description: "Learn server-side development with Node.js, Express, and databases for scalable apps.",
            image: 'https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg'
        },
        {
            name: "Full Stack",
            price: 299,
            duration: "12 Weeks",
            description: "Gain skills in frontend and backend technologies to build fully functional web apps.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx37pHeJnzuPi0sFXFKHNNPdQ0CBRN6ed_Uw&s'
        },
        {
            name: "MERN",
            price: 299,
            duration: "12 Weeks",
            description: "Build full-stack applications using MongoDB, Express, React, and Node.js (MERN stack).",
            image: 'https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1'
        },
        {
            name: "Dotnet",
            price: 299,
            duration: "12 Weeks",
            description: "Become proficient in .NET framework to develop enterprise-level applications.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TBw16x0HJUQ4sWUV8RzHzK7LrYTibjU7HQ&s'
        },
        {
            name: "RDBMS",
            price: 199,
            duration: "10 Weeks",
            description: "Learn relational database management systems to effectively manage data.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdzPg6woox3CU85IZ3RhNszv6d4s2gzLnRw&s'
        }
    ];

    useEffect(() => {
        if (courses.length > visibleCards && !isPaused) {
            const interval = setInterval(() => {
                handleNext();
            }, 3000); // Auto-scroll every 3 seconds

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
        setIsPaused(true); // Pause auto-scroll on hover
    };

    const handleMouseLeave = () => {
        setIsPaused(false); // Resume auto-scroll on mouse leave
    };

    return (
        <div className="container-fluid">
            <h1 className="text-center mb-4 mt-4 fw-bold">Featured Courses</h1>

            <div className="position-relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                    >
                        {courses.map((course, index) => (
                            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
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
