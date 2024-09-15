import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CourseCard from '../coursecards/CourseCards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './FeaturedSection.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const FeaturedSection = () => {
    const [courses, setCourses] = useState([]);

    // Fetch data from the public folder
    useEffect(() => {
        fetch('/coursesData.json')  // Relative path to the public folder
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCourses(data);
            })
            .catch((error) => {
                console.error('Error fetching courses data:', error);
            });
    }, []);

    const NextArrow = ({ onClick }) => {
        return (
            <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container-fluid">
            <h1 className={`text-center  mt-5 fw-bold ${styles.lineFeature}`}>Our Featured Courses</h1>
            <div className={styles.sliderContainer}>
                {courses.length > 0 ? (
                    <Slider {...settings}>
                        {courses.map((course, index) => (
                            <div key={index} className={styles.cardWrapper}>
                                <CourseCard course={course} />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p>Loading courses...</p>
                )}
            </div>
        </div>
    );
};

export default FeaturedSection;
