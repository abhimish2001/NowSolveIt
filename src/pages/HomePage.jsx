import HeroSection from '../components/herosection/HeroSection';
import Testimonial from '../components/testimonials/Testimonial';
import Cards from '../components/cards/Cards';
import FeaturedSection from '../components/coursecards/FeaturedSection';
import AboutUs from '../components/aboutus/AboutUs';

function App() {
    return (
        <div>
            <HeroSection />
            <FeaturedSection />
            <Cards />
            <AboutUs />
            <Testimonial />
        </div>
    );
}

export default App;
