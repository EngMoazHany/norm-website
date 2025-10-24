import React, { useEffect, useState } from 'react';
import styles from '../styles/SplashScreen.module.css';
import logo from '../assets/logo.png';

const SplashScreen = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 4000); // ⏳ اختفاء بعد كل الأنيميشن
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className={styles.splash}>
      <img src={logo} alt="Logo" className={styles.splashLogo} />
    </div>
  );
};

export default SplashScreen;
