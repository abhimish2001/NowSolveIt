import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CoursePage from './pages/coursepage/CoursePage';
import Footer from './components/footer/Footer';
import Top from './components/top/Top'
import ContactUs from './pages/contactus/ContactUs';
import PrivacyPolicy from './components/privacypolicy/PrivacyPolicy'
import TermsOfService from './components/termsofservice/TermsOfService'
import Faqs from './components/faqs/Faqs'
function App() {
  return (
    <Router>
      <Top />
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/faqs" element={<Faqs />} />



      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
