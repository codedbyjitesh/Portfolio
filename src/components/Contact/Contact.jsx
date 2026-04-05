import React from "react";
import "./contact.css";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {

    const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_9z1dwlr",
    "template_55slpcr",
    e.target,
    "mMi8q7SFiQNCUGvjr"
  ).then(
    () => {
      alert("Message sent successfully ✅");
    },
    () => {
      alert("Failed to send ❌");
    }
  );

  e.target.reset();
};

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
                   src="https://www.google.com/maps?q=Mumbai&output=embed"
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
                <form onSubmit={sendEmail}>
                    <div className="input-row">
                        <input type="text" name="user_name" placeholder="Full name" required />
                        <input type="email" name="user_email" placeholder="Email address" required />
                    </div>
                    <textarea name="user_message" placeholder="Your Message" rows="5" required></textarea>
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