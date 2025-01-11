import React from 'react';
import styles from './Header.module.css';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import bird from '../../images/bird.png'


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.titles}>
            <div className={`${styles.title} ${styles.title1} ${styles.lineUp}`}>
              <span className={styles.letter}>P</span>
              <span className={styles.letter}>e</span>
              <span className={styles.letter}>l</span>
              <span className={styles.letter}>e</span>
              <span className={styles.letter}>r</span>
              <span className={styles.letter}>i</span>
              <span className={styles.letter}>n</span>
              <span className={styles.letter}>a</span>
              <span className={styles.letter}>j</span>
              <span className={styles.letter}>e</span>
              <div className={`${styles.title} ${styles.p2title}`}>
                <span className={styles.letter}>M</span>
                <span className={styles.letter}>i</span>
                <span className={styles.letter}>r</span>
                <span className={styles.letter}>a</span>
              </div>
            </div>
            <div className={`${styles.title} ${styles.lineUp}`}>
              <span className={styles.letter}>"S</span>
              <span className={styles.letter}>c</span>
              <span className={styles.letter}>h</span>
              <span className={styles.letter}>i</span>
              <span className={styles.letter}>m</span>
              <span className={styles.letter}>b</span>
              <span className={styles.letter}>a</span>
              <span className={styles.letter}>r</span>
              <span className={styles.letter}>e</span>
              <span className={styles.letter}>a</span>
              <div className={`${styles.title} ${styles.p2title}`}>
                <span className={styles.letter}>l</span>
                <span className={styles.letter}>a</span>
              </div>
              <div className={`${styles.title} ${styles.p2title}`}>
                <span className={styles.letter}>F</span>
                <span className={styles.letter}>a</span>
                <span className={styles.letter}>ț</span>
                <span className={styles.letter}>ă"</span>
              </div>
            </div>
        </div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navItem}>
            <span className={styles.itemName}>Despre</span>
          </a>
          <a href="#trips" className={styles.navItem}>
            <span className={styles.itemName}>Pelerinaje</span>
          </a>
          <a href="#contact" className={styles.navItem}>
            <span className={styles.itemName}>Contact</span>
          </a>
        </nav>
        <div className={styles.contacts}>
          <div className={styles.phones}>
            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <div className={styles.phone}>
                <span className={styles.text}>Pr. Crișan Anton</span>
                <span className={styles.text}>0729 884 881</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <div className={styles.phone}>
                <span className={styles.text}>Coblișan Alex</span>
                <span className={styles.text}>0745 966 920</span>
              </div>
            </div>
          </div>
          <div className={`${styles.contactItem} ${styles.email}`}>
            <FaEnvelope className={styles.icon} />
            <span className={styles.text}>contact@pelerinaje.ro</span>
          </div>
        </div>
      </div>
      <p className={styles.rotatingParagraph}>
      Haideți să ne alăturăm Mariei în
      </p>
      <div className={styles.words}>
          <p className={styles.rotatingText}>Credință</p>
          <p className={styles.rotatingText}>Iubire</p>
          <p className={styles.rotatingText}>Comuniune</p>
        </div>
        <img src={bird} alt='logo' className={styles.logo}></img>
    </header>
  );
};

export default Header;
