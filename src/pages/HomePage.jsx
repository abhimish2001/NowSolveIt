import HeroSection from '../components/herosection/HeroSection';
import Cards from '../components/cards/Cards';
import FeaturedSection from '../components/coursecards/FeaturedSection';
import AboutUs from '../components/aboutus/AboutUs';
import TestimonialSection from '../components/testimonials/TestimonialSection';

function App() {
    return (
        <div>
            <HeroSection />
            <FeaturedSection />
            <Cards />
            <AboutUs />
            <TestimonialSection />
        </div>
    );
}

export default App;
