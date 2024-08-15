import styles from './HeroSection.module.css';
import heroImage from '../../assets/heros/hero.jpg';

function HeroSection() {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
            <div className={styles.heroTextContainer}>
                <h1>Welcome to NowSolveIt</h1>
                <p>Learn the skills you need to succeed in today’s world.</p>
                <a href="#" className="btn btn-primary btn-lg">Start Learning</a>
            </div>
        </section>
    );
}

export default HeroSection;
