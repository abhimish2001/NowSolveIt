import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import CoursePage from './pages/coursepage/CoursePage';
import Footer from './components/footer/Footer';
import Top from './components/top/Top';
import ContactUs from './pages/contactus/ContactUs';


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
