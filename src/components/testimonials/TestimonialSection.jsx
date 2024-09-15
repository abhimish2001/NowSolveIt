import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './TestimonialSection.module.css';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch data from the public folder
  useEffect(() => {
    fetch('/testimonialsData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => {
        console.error('Error fetching testimonials data:', error);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className={styles.testimonialSection}>
      <h2 className="fw-bold">What Our Students Say</h2>
      <Slider {...settings} className={styles.slider}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            contact={testimonial.contact}
            review={testimonial.review}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
