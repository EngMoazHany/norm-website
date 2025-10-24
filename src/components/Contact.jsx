import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Contact.module.css";
import backgroundImg from "../assets/Photo1.png";
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwpbaykk"); // ✅ معرف Formspree الجديد

  return (
    <section
      className={styles.contact}
      id="contact"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>تواصل معنا</h2>

        {/* معلومات التواصل */}
        <div className={styles.contactInfo}>
          <p>
            <FiMail className={styles.icon} />
            <a href="mailto:info@norm-prod.com">info@norm-prod.com</a>
          </p>
          <p>
            <FiPhone className={styles.icon} />
            <a href="tel:+905010655000">+90 50 106 55000</a>
          </p>
        </div>

        {/* الفورم */}
        {!state.succeeded ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="الاسم"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
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
                placeholder="اكتب رسالتك هنا..."
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
              {state.submitting ? "جاري الإرسال..." : "إرسال الرسالة 📩"}
            </button>
          </form>
        ) : (
          <p className={styles.successMsg}>✅ تم إرسال رسالتك بنجاح!</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
