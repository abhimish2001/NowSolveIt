import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/coursepage/CoursePage';
import ContactUs from './pages/contactus/ContactUs';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';
import Top from './components/top/Top';
import EnrollmentForm from './components/enrollmentForm/EnrollmentForm';

function App() {
  return (
    <Router>
      <Top />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/enrollment" element={<EnrollmentForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
