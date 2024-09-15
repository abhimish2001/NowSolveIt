import styles from './Cards.module.css';  // Importing the CSS module
import htmlimg from '../../assets/courseImg/html.png';  // Importing local image
import css from '../../assets/courseImg/css.png';  // Importing local image
import javascript from '../../assets/courseImg/js.png';  // Importing local image
import bootstrap from '../../assets/courseImg/bootstrap.png';
import reactImg from '../../assets/courseImg/react.png';
import dotnet from '../../assets/courseImg/csharp.png';
import dbms from '../../assets/courseImg/dbms.jpeg';
import { NavLink } from 'react-router-dom';

const cardData = [
    {
        imgSrc: htmlimg,
        title: 'HTML',
    },
    {
        imgSrc: css,
        title: 'CSS',
    },
    {
        imgSrc: javascript,
        title: 'JavaScript',
    },
    {
        imgSrc: bootstrap,
        title: 'Bootstrap',
    },
    {
        imgSrc: dotnet,
        title: 'C#',
    },

];

function Cards() {
    return (
        <div className={`container-fluid ${styles.bgColor} pt-1 pb-3 mt-0`}>
            <h1 className={`text-center mt-1 mb-5 fw-bold ${styles.lineFeature}`}>
                Notes
            </h1>        <div className="container">
                <div className={`row ${styles.container}`}>
                    {cardData.map((card, index) => (
                        <div className="col" key={index}>
                            <div className={`card border-light shadow-sm ${styles.cardHover} ${styles.cardSize}`}>
                                <img src={card.imgSrc} className={`card-img-top ${styles.cardImg}`} alt={card.title} />
                                <div className={`card-body ${styles.cardBody}`}>
                                    {/* Content can go here */}
                                </div>
                                <h5 className={`card-title ${styles.cardTitle}`}>{card.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <NavLink
                        to="/courses" // Replace with your desired route path
                        className={styles.exploreButton}
                    >
                        Explore More
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Cards;
