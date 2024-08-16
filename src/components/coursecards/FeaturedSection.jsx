import { useState, useEffect } from 'react';
import CourseCard from '../coursecards/CourseCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FeaturedSection.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FeaturedSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const totalCourses = 10; // Total number of courses
    const visibleCards = 5; // Cards visible in the row

    const courses = [
        {
            name: "Frontend Development",
            price: 199,
            duration: "8 Weeks",
            description: "Master HTML, CSS, and JavaScript to build beautiful websites and responsive UIs.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        },
        {
            name: "Backend Development ..",
            price: 249,
            duration: "10 Weeks",
            description: "Learn server-side development with Node.js, Express, and databases for scalable apps.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        },
        {
            name: "Full Stack Development",
            price: 299,
            duration: "12 Weeks",
            description: "Gain skills in frontend and backend technologies to build fully functional web apps.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        },
        {
            name: "MERN Stack Development",
            price: 299,
            duration: "12 Weeks",
            description: "Build full-stack applications using MongoDB, Express, React, and Node.js (MERN stack).",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        },
        {
            name: "Dotnet Development (.Net)",
            price: 299,
            duration: "12 Weeks",
            description: "Become proficient in .NET framework to develop enterprise-level applications.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        },
        {
            name: "Python Programming",
            price: 199,
            duration: "8 Weeks",
            description: "Master the basics of Python programming and apply it in web development and data science.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        },
        {
            name: "JavaScript Development",
            price: 249,
            duration: "10 Weeks",
            description: "Advance your JavaScript skills and learn modern frameworks for web development.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        },
        {
            name: "Data Structures & Algorithms",
            price: 199,
            duration: "10 Weeks",
            description: "Build a strong foundation in data structures and algorithms for coding interviews.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        },
        {
            name: "DevOps & CI/CD ...",
            price: 299,
            duration: "10 Weeks",
            description: "Learn how to automate software delivery and improve efficiency with CI/CD pipelines.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        },
        {
            name: "Cloud Computing with AWS",
            price: 299,
            duration: "12 Weeks",
            description: "Develop a deep understanding of AWS services and build scalable cloud applications.",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDYV-2Wzdq5gaHKhkTp_viMt0M81dTTnikA&usqp=CAU'
        }
    ];



    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                handleNext();
            }, 3000); // Slide every 3 seconds
            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [isPaused, currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCourses - visibleCards : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalCourses - visibleCards ? 0 : prevIndex + 1));
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div className="container">
            <h1 className="text-center mb-4 mt-4 fw-bold">Featured Courses</h1>

            <div className="position-relative">
                <button className={styles.prevButton} onClick={handlePrev}>
                    <FaArrowLeft />
                </button>

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

                <button className={styles.nextButton} onClick={handleNext}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default FeaturedSection;