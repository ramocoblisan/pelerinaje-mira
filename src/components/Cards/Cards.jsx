import React from 'react';
import styles from './Cards.module.css';
import CardComp from '../Card/Card';
import medjugorje1 from '../../images/medjugorje1.png';
import medjugorje2 from '../../images/medjugorje2.png';
import medjugorje3 from '../../images/medjugorje3.png';
import medjugorje4 from '../../images/medjugorje4.png';
import medjugorje5 from '../../images/medjugorje5.png';
import krakow from '../../images/krakow.png';

const cardData = [
  {
    title: "Medjugorje",
    image: medjugorje1,
    period: '21.04-27.04',
  },
  {
    title: "Polonia",
    image: krakow,
    period: '19.05-24.05',
  },
  {
    title: "Medjugorje",
    image: medjugorje2,
    period: '20.06-27.06',
  },
  {
    title: "Medjugorje",
    image: medjugorje3,
    period: '02.08-10.08',
  },
  {
    title: "Medjugorje",
    image: medjugorje4,
    period: '31.10-06.11',
  },
  {
    title: "Medjugorje",
    image: medjugorje5,
    period: '29.12-04.02',
  }
];

export default function Cards() {
  return (
    <div className={styles.cardSection}>
      <h2 className={styles.title}>Pelerinajele anului 2025</h2>
      <div className={styles.cardsContent}>
        {cardData.map((card, index) => (
          <CardComp 
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            period={card.period}
          />
        ))}
      </div>
    </div>
  );
}