import HeroSection from '../components/herosection/HeroSection';

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
        </div>
    );
}

export default App;
