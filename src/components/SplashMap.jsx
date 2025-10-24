import React, { useEffect, useState } from 'react';
import styles from '../styles/SplashMap.module.css';
import logo from '../assets/logo.png';
import worldMap from '../assets/matrix-map.png';

const cities = [
  { name: 'Mexico', top: '42%', left: '18%' },
  { name: 'Egypt', top: '39%', left: '46%' },
  { name: 'Turkey', top: '34%', left: '49%' },
  { name: 'Saudi Arabia', top: '42%', left: '54%' },
  { name: 'Yemen', top: '47%', left: '55%' },
  { name: 'Dubai', top: '43%', left: '59%' },
  { name: 'India', top: '45%', left: '66%' },
  { name: 'Malaysia', top: '58%', left: '76%' },
];

const SplashMap = ({ onFinish }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 3000);
    const timer2 = setTimeout(() => onFinish(), 6500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={styles.splashMap}>
      <img src={worldMap} alt="World Map" className={styles.map} />
      {cities.map((city, index) => (
        <div
          key={index}
          className={styles.cityDot}
          style={{ top: city.top, left: city.left }}
        >
          <span className={styles.cityName}>{city.name}</span>
        </div>
      ))}

      {showMessage && (
        <div className={`${styles.message} cairo-font`}>
  <img src={logo} alt="Norm Logo" className={styles.logoImage} />
  <h1>
    فريقنا <span style={{ color: '#e60000' }}>هنا</span>... في كل <span style={{ color: '#e60000' }}>مكان</span>
  </h1>
</div>

      )}
    </div>
  );
};

export default SplashMap;
