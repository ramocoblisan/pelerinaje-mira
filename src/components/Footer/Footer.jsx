import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Footer.module.css'; 

const Footer = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

  return (
    <footer 
    ref={ref}
    className={`${styles.footer} ${inView ? 'fade-in in-view' : 'fade-in'}`}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h3>Contact</h3>
          <p>Pr. Crișan Anton <a href="tel:+40729884881">0729 884 881</a></p>
          <p>Coblișan Alex <a href="tel:0745966920">0745 966 920</a></p>
          <p>Email: <a href="mailto:info.pelerinajemira@gmail.com">info.pelerinajemira@gmail.com</a></p>
        </div>

        <div className={styles.privacyNotice}>
          <h3>Confidențialitate</h3>
          <p>
            Acest site <strong>nu colectează date personale</strong>. Pentru orice întrebări sau informații suplimentare, vă rugăm să ne contactați folosind datele de mai sus.
          </p>
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Pelerinaje Mira. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;