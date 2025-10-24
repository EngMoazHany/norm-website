import React from 'react';
import styles from '../styles/Hero.module.css';
import videoSrc from '../assets/video.mp4';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      {/* خلفية الفيديو */}
      <video
        className={styles.backgroundMedia}
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* النص والمحتوى فوق الفيديو */}
      <div className={styles.heroText}>
        <h1 className={styles.title}>
          We’re <span>Building</span> Something Awesome
        </h1>
        <p className={styles.subtitle}>
          Your one-stop solution for all your needs.
        </p>
        <p className={styles.wait}>Just hang tight 🚀</p>
        <a href="contact" className={styles.ctaButton}>
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
