import React from "react";
import "./contact.css";
import { Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="contact-container">
            <header>
                <h2 className="section-title">Contact</h2>
                <div className="underline"></div>
            </header>

            {/* Map Section */}
            <div className="map-box">
                <iframe
                    title="location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.0!2d2.293!3d48.858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca973a941e744!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1700000000000"
                    width="100%"
                    height="400"
                    style={{ border: 0, borderRadius: "20px", filter: "grayscale(1) invert(1)" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Contact Form Section */}
            <section className="contact-form">
                <h3 className="form-title">Contact Form</h3>
                <form action="#">
                    <div className="input-row">
                        <input type="text" placeholder="Full name" required />
                        <input type="email" placeholder="Email address" required />
                    </div>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <div className="form-footer">
                        <button type="submit" className="submit-btn">
                            <Send size={18} /> {/* The Icon */}
                            <span>Send Message</span>
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}