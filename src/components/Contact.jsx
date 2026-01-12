import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Contact.module.css";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpbaykk");

  return (
    <section className={styles.contact}>
      {/* 🎥 Film Grain */}
      <div className={styles.grain} />

      {/* 🔴 Red Glow */}
      <div className={styles.redGlow} />

      <div className={styles.container}>
        <h2 className={styles.title}>تواصل معنا</h2>

        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <p>
            <FiMail className={styles.icon} />
            <a href="mailto:info@norm-prod.com">info@norm-prod.com</a>
          </p>

          <p>
            <FiPhone className={styles.icon} />
            <a href="tel:+905010655000">+90 50 106 55000</a>

            <a
              href="https://wa.me/905010655000?text=Hello%20NORM%20Production"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </p>
        </div>

        {/* Contact Form */}
        {!state.succeeded ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message 📩"}
            </button>
          </form>
        ) : (
          <p className={styles.successMsg}>✅ Your message has been sent!</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
