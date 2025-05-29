// App.jsx
import React, { useContext } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/coursepage/CoursePage';
import ContactUs from './pages/contactus/ContactUs';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';
import Top from './components/top/Top';
import EnrollmentForm from './components/enrollmentForm/EnrollmentForm';
import LoginForm from './components/loginAndRegistration/Login';
import RegistrationForm from './components/loginAndRegistration/Registration';
import { AuthProvider, AuthContext } from './context/AuthContext';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  return (
    <>
      <Top />
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <PrivateRoute>
              <CoursePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <ContactUs />
            </PrivateRoute>
          }
        />
        <Route
          path="/enrollment"
          element={
            <PrivateRoute>
              <EnrollmentForm />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
