import styles from './Cards.module.css';  // Importing the CSS module
import htmlimg from '../../assets/courseImg/html.png';  // Importing local image
import css from '../../assets/courseImg/css.png';  // Importing local image
import javascript from '../../assets/courseImg/js.png';  // Importing local image
import bootstrap from '../../assets/courseImg/bootstrap.png';
import reactImg from '../../assets/courseImg/react.png';
import dotnet from '../../assets/courseImg/csharp.png';
import dbms from '../../assets/courseImg/dbms.jpeg';




const cardData = [
    {
        imgSrc: htmlimg,  // Correctly assigning the imported image
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
        title: '.NET',
    },
    {
        imgSrc: dbms,
        title: 'RDBMS',
    },
    {
        imgSrc: reactImg,
        title: 'React',
    },
    {
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png',
        title: 'Python',
    },
];

function Cards() {
    return (
        <div className={`container-fluid ${styles.bgColor} py-5`}>
            <h2 className={`text-center ${styles.heading}`}>Our Courses</h2>
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {cardData.map((card, index) => (
                        <div className="col" key={index}>
                            <div className={`card border-light shadow-sm ${styles.cardHover} ${styles.cardSize}`}>
                                <img src={card.imgSrc} className={`card-img-top ${styles.cardImg}`} alt={card.title} />
                                <div className={`card-body ${styles.cardBody}`}>
                                    <h5 className={`card-title ${styles.cardTitle}`}>{card.title}</h5>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <a
                    href="#" // Replace with your Google Form link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.exploreButton}
                >
                    Explore More
                </a>
            </div>
        </div>
    );
}

export default Cards;
