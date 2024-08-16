import styles from './HeroSection.module.css';
import heroImage from '../../assets/heros/hero1.jpg';

function HeroSection() {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
            <div className={styles.heroTextContainer}>
                <h1>Welcome to NowSolveIt</h1>
                <p>Learn the skills you need to succeed in today’s world.</p>
            </div>
        </section>
    );
}

export default HeroSection;
