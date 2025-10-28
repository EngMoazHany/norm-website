import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navdiv}>
        {/* 👇 نزلنا اللوجو شوي */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="شعار نورم" className={styles.logoImage} />
          </Link>
        </div>

        {/* زر الموبايل */}
        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="قائمة">
          ☰
        </button>

        {/* الروابط */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
          <li><Link className={styles.navLink} to="/">الرئيسية</Link></li>
          <li><Link className={styles.navLink} to="/about">من نحن</Link></li>
        </ul>

        {/* تواصل معنا — ظاهر دايمًا */}
        <div className={styles.contactLink}>
          <Link className={styles.navLink} to="/contact">تواصل معنا</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
