import { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ContactUs.module.css"; // Import the CSS module

function ContactUs() {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Email sent successfully!");
                handleReset();
            } else {
                // Handle specific error codes or messages from the server
                if (res.status === 400) {
                    toast.error("Invalid data: " + data.message);
                } else if (res.status === 500) {
                    toast.error("Internal server error");
                    // Consider logging the error to a centralized error tracking system
                } else {
                    toast.error("Failed to send email: " + data.message);
                }
            }
        } catch (error) {
            console.error("Failed to send email", error);
            toast.error("An unexpected error occurred. Please try again later.");
            // Consider logging the error to a centralized error tracking system
        }
    };
    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={`${styles.leftSide} ${styles.b1} wow animate__animated animate__slideInLeft`}>
                        <div className={`${styles.details}`}>
                            <i className="bi bi-geo-alt-fill"></i>
                            <div className={styles.topic}>Address</div>
                            <div className={`${styles.textOne} fs-5 text-secondary`}>
                                C-406, ROHINI APPT. GOMTI NAGAR EXT.
                            </div>
                            <div className={`${styles.textTwo} fs-5 text-secondary`}>
                                LUCKNOW | UP- 226010
                            </div>
                        </div>
                        <div className={styles.details}>
                            <i className="bi bi-telephone-fill"></i>
                            <div className={styles.topic}>Phone</div>
                            <div className={`${styles.textOne} fs-5 text-secondary`}>+91-8960042591</div>
                            <div className={`${styles.textTwo} fs-5 text-secondary`}>+91-9598433299</div>
                        </div>
                        <div className={styles.details}>
                            <i className="bi bi-envelope-fill"></i>
                            <div className={styles.topic}>Email</div>
                            <div className={`${styles.textOne} fs-5 text-secondary`}>
                                yatinidhiconst@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className={styles.vl}></div>
                    <div className={`${styles.rightSide} ${styles.b1} wow animate__animated animate__slideInRight`}>
                        <div className={styles.topicText}>Send us a message</div>
                        <p>Please fill out the details below to contact us</p>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputBox}>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputBox}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={styles.input}
                                />
                            </div>
                            <div className={`${styles.inputBox} ${styles.messageBox}`}>
                                <textarea
                                    placeholder="Enter your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className={`${styles.input} ${styles.textArea}`}
                                ></textarea>
                            </div>
                            <div className="button-group">
                                <button
                                    className="btn btn-secondary p-2 m-2"
                                    type="submit"
                                    disabled={
                                        !formData.name || !formData.email || !formData.message
                                    }
                                >
                                    Submit
                                </button>
                                <button
                                    className="btn btn-secondary p-2 m-2"
                                    type="button"
                                    onClick={handleReset}
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" />
        </>
    );
}

export default ContactUs;
