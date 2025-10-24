import React from "react";
import styles from "../styles/Services.module.css";

import image1 from "../assets/1.jpg";           // أيقونات الخدمات
import image2 from "../assets/Photo1.png";     // الخلفية
import image3 from "../assets/2.jpg";          // صورة إضافية

const Services = () => {
  return (
    <section className={styles.container}>
      {/* خلفية البانر */}
      <div className={styles.background}>
        <img src={image2} alt="Norm Banner" />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        {/* العنوان */}
        <h2 className={styles.title}>
          <span className={styles.brand}>Norm</span> Services
        </h2>

        {/* الصورة 1 */}
        <div className={styles.card}>
          <img src={image1} alt="Services Icons" className={styles.servicesImage} />
        </div>

        {/* الصورة 2 */}
        <div className={styles.card}>
          <img src={image3} alt="Design 2" className={styles.servicesImage} />
        </div>
      </div>
    </section>
  );
};

export default Services;
