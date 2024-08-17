import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import CoursePage from './pages/coursepage/CoursePage';
import ContactUs from './pages/contactus/ContactUs';
import Footer from './components/footer/Footer';
import Top from './components/top/Top'
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
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
