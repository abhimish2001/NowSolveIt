import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './TestimonialSection.module.css';

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/testimonials') // or your deployed API URL
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Error fetching testimonials:', err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className={styles.testimonialSection}>
      <h2 className="fw-bold">What Our Students Say</h2>
      <Slider {...settings} className={styles.slider}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial._id}
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
