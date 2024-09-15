import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import LandScapeCard from './LandScapeCard';
import styles from './AboutDevelopment.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutDevelopment = () => {
  const [data, setData] = useState(null);

  // Fetch data from the public folder
  useEffect(() => {
    fetch('/personality.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: '0',  // Adjust as per design preference
  };

  return (
    <section className={`container-fluid ${styles.section}`}>
      <div className={styles.container}>
        <h1 className={`text-center mt-1 mb-4 fw-bold ${styles.lineFeature}`}>
          {data.heading}
        </h1>
        <p className={styles.intro}>{data.intro}</p>
        <Slider {...settings} className={styles.slider}>
          {data.sections.map((section, index) => (
            <LandScapeCard
              key={index}
              title={section.title}
              description={section.description}
              points={section.points}
              image={section.image}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AboutDevelopment;
