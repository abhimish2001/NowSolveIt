import React from 'react';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './TestimonialSection.module.css';

const testimonials = [
  {
    name: "Abhishek Mishra",
    contact: "abhimish2001@gmail.com",
    review: "This course was absolutely amazing! I learned so much and the instructors were great."
  },
  {
    name: "Akash Yadav",
    contact: "akashy5660@gmail.com",
    review: "A fantastic learning experience. The content was well-structured and easy to follow."
  },
  {
    name: "Shubham Kashyap",
    contact: "sk8113347@gmail.com",
    review: "I highly recommend this program to anyone looking to enhance their skills."
  },
  {
    name: "Deepak Gupta",
    contact: "deepakgupta97945549@gmail.com",
    review: "The instructors were so knowledgeable and helpful. I would take another course here in a heartbeat."
  },
  {
    name: "Ravishankar Pandey",
    contact: "ravishankar056@gmail.com",
    review: "The instructors were so knowledgeable and helpful. I would take another course here in a heartbeat."
  }
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
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
      <h2 className='fw-bold'>What Our Students Say</h2>
      <Slider {...settings} className={styles.slider}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
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
