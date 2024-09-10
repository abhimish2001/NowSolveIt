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
    review: "This course was exceptional! The content was well-organized, and the instructors were very supportive and knowledgeable."
  },
  {
    name: "Akash Yadav",
    contact: "akashy5660@gmail.com",
    review: "An excellent learning experience. The course material was comprehensive, and the guidance provided was extremely helpful."
  },
  {
    name: "Shubham Kashyap",
    contact: "sk8113347@gmail.com",
    review: "I thoroughly enjoyed this program. The course was well-structured, and the practical insights were invaluable for my growth."
  },
  {
    name: "Deepak Gupta",
    contact: "deepakgupta97945549@gmail.com",
    review: "A truly remarkable course! The quality of instruction and the clarity of the material were outstanding. Highly recommend!"
  },
  {
    name: "Ravishankar Pandey",
    contact: "ravishankar056@gmail.com",
    review: "The course was incredibly beneficial. The instructors were expert and provided useful feedback that helped me advance my skills."
  },
  {
    name: "Amit Sharma",
    contact: "amit.sharma@example.com",
    review: "The course exceeded my expectations. The content was engaging, and the support from the instructors was outstanding."
  },
  {
    name: "Priya Singh",
    contact: "priya.singh@example.com",
    review: "An exceptional learning experience! The course was well-organized, and the feedback from the instructors was always constructive."
  },
  {
    name: "Ravi Patel",
    contact: "ravi.patel@example.com",
    review: "A highly valuable program with excellent resources. The instructors were attentive, and the practical content was very useful."
  },
  {
    name: "Sanya Verma",
    contact: "sanya.verma@example.com",
    review: "Fantastic course! The structured approach and interactive elements made the learning process both enjoyable and effective."
  },
  {
    name: "Rajesh Kumar",
    contact: "rajesh.kumar@example.com",
    review: "A great experience overall. The course was well-organized, and the support provided was exceptional. Highly recommended!"
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
