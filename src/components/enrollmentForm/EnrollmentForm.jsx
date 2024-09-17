import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import styles from './EnrollmentForm.module.css'; // assuming CSS module is used
import { useNavigate } from 'react-router-dom';

const EnrollmentForm = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [courseFee, setCourseFee] = useState('');
    const [formData, setFormData] = useState(null);
    const [isPaymentComplete, setIsPaymentComplete] = useState(false);
    const navigate = useNavigate(); // Hook to navigate programmatically

    const technicalCourses = {
        'JavaScript': 'Rs 699',
        '.NET': 'Rs 3999',
        'React': 'Rs 2499',
        'Frontend': 'Rs 3999',
        'Backend': 'Rs 2499',
        'DBMS': 'Rs 1499',
    };

    const professionalCourses = {
        'Communication Skills': 'Rs 1999',
        'Personality Development': 'Rs 1999',
        'Aptitude': 'Rs 999',
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setSelectedCourse('');
        setCourseFee('');
    };

    const handleCourseChange = (e) => {
        const selected = e.target.value;
        setSelectedCourse(selected);
        if (selectedCategory === 'Technical') {
            setCourseFee(technicalCourses[selected]);
        } else if (selectedCategory === 'Professional') {
            setCourseFee(professionalCourses[selected]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            whatsapp: e.target.whatsapp.value,
            category: selectedCategory,
            course: selectedCourse,
            fee: courseFee,
            paymentMethod: 'Simulated Payment Method', // Placeholder for payment method
        };

        setFormData(data);
        setIsPaymentComplete(true);
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(22);
        doc.text("Congratulations on Your Enrollment!", 20, 20);
        doc.text("Thank you for registering with us. Below are the details of your enrollment:", 20, 30);

        doc.setFontSize(16);
        doc.text(`Name: ${formData.name}`, 20, 50);
        doc.text(`Email: ${formData.email}`, 20, 60);
        doc.text(`Phone: ${formData.phone}`, 20, 70);
        doc.text(`WhatsApp: ${formData.whatsapp}`, 20, 80);
        doc.text(`Category: ${formData.category}`, 20, 90);
        doc.text(`Course: ${formData.course}`, 20, 100);
        doc.text(`Fee: ${formData.fee}`, 20, 110);
        doc.text(`Payment Method: ${formData.paymentMethod}`, 20, 120);

        doc.save('enrollment-receipt.pdf');
    };

    const handleReturnHome = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className={styles.formContainer}>
            {!isPaymentComplete ? (
                <div className={styles.formWrapper}>
                    <h2 className={styles.formTitle}>Enrollment Form</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone Number:</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="whatsapp">WhatsApp Number:</label>
                            <input type="tel" id="whatsapp" name="whatsapp" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="category">Course Category:</label>
                            <select id="category" name="category" value={selectedCategory} onChange={handleCategoryChange} required>
                                <option value="">Select a Category</option>
                                <option value="Technical">Technical</option>
                                <option value="Professional">Professional</option>
                            </select>
                        </div>

                        {selectedCategory && (
                            <div className={styles.formGroup}>
                                <label htmlFor="course">Select Course:</label>
                                <select id="course" name="course" value={selectedCourse} onChange={handleCourseChange} required>
                                    <option value="">Select a Course</option>
                                    {Object.keys(
                                        selectedCategory === 'Technical' ? technicalCourses : professionalCourses
                                    ).map((course, index) => (
                                        <option key={index} value={course}>{course}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {courseFee && (
                            <div className={styles.feeDisplay}>
                                <p>Course Fee: <strong>{courseFee}</strong></p>
                            </div>
                        )}

                        <button type="submit" className={styles.submitButton}>Pay Now</button>
                    </form>
                </div>
            ) : (
                <div className={styles.receipt}>
                    <h2>Payment Successful!</h2>
                    <h3>Enrollment Receipt</h3>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>WhatsApp:</strong> {formData.whatsapp}</p>
                    <p><strong>Category:</strong> {formData.category}</p>
                    <p><strong>Course:</strong> {formData.course}</p>
                    <p><strong>Fee:</strong> {formData.fee}</p>
                    <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>

                    <button onClick={generatePDF} className={styles.downloadButton}>Download Receipt as PDF</button>
                    <button onClick={handleReturnHome} className={styles.returnButton}>Return to Home Page</button>
                </div>
            )}
        </div>
    );
};

export default EnrollmentForm;
