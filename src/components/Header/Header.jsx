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
              <span className={styles.litera}>P</span>
              <span className={styles.litera}>e</span>
              <span className={styles.litera}>l</span>
              <span className={styles.litera}>e</span>
              <span className={styles.litera}>r</span>
              <span className={styles.litera}>i</span>
              <span className={styles.litera}>n</span>
              <span className={styles.litera}>a</span>
              <span className={styles.litera}>j</span>
              <span className={styles.litera}>e</span>
              <div className={`${styles.title} ${styles.p2title}`}>
                <span className={styles.litera}>M</span>
                <span className={styles.litera}>i</span>
                <span className={styles.litera}>r</span>
                <span className={styles.litera}>a</span>
              </div>
            </div>
            <div className={`${styles.title} ${styles.lineUp}`}>
              <span className={styles.litera}>"S</span>
              <span className={styles.litera}>c</span>
              <span className={styles.litera}>h</span>
              <span className={styles.litera}>i</span>
              <span className={styles.litera}>m</span>
              <span className={styles.litera}>b</span>
              <span className={styles.litera}>a</span>
              <span className={styles.litera}>r</span>
              <span className={styles.litera}>e</span>
              <span className={styles.litera}>a</span>
              <div className={`${styles.title} ${styles.p2title}`}>
                <span className={styles.litera}>l</span>
                <span className={styles.litera}>a</span>
              </div>
              <div className={`${styles.title} ${styles.p2title}`}>
                <span className={styles.litera}>F</span>
                <span className={styles.litera}>a</span>
                <span className={styles.litera}>ț</span>
                <span className={styles.litera}>ă"</span>
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
      Haideti sa ne alaturam Mariei in
      </p>
      <div className={styles.words}>
          <h2 className={styles.rotatingText}>Credinta</h2>
          <h2 className={styles.rotatingText}>Iubire</h2>
          <h2 className={styles.rotatingText}>Comuniune</h2>
        </div>
        <img src={bird} className={styles.logo}></img>
    </header>
  );
};

export default Header;
